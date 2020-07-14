import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    notes: []
  }


  private email: string;

  

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };

  constructor(private http: HttpClient) { }

  setData(email){
    this.email =  email;
  }
  getData(){
    return this.email;
  }
  postUser(user: User){
    return this.http.post('http://localhost:8080/api/register',user,this.noAuthHeader);
  }
  login(authCredentials){
    return this.http.post('http://localhost:8080/api/authenticate', authCredentials,this.noAuthHeader);
  }
  getUserProfile(){
    return this.http.get('http://localhost:8080/api/userProfile');
  }
  createNote(note){
    return this.http.post('http://localhost:8080/api/postNote',note,this.noAuthHeader)
  }
  setToken(token:string){
    localStorage.setItem('token',token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else 
      return null; 
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else 
      return false; 
      
  }

}
