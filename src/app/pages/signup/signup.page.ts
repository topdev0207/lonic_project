import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string; 
  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    form.value.notes = [];
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=>this.showSuccessMessage = false,4000);
      },
      err => {
        if (err.status = 422){
          this.serverErrorMessages = err.error.join('<br>')
        }
      }

    );
  }
}
