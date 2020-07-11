import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {
  constructor(private userService: UserService, private router: Router, route:ActivatedRoute) { 
    route.params.subscribe(val => {
      this.userService.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'];
          this.userDetails.notes.reverse();
          this.userService.setData(this.userDetails.email);
        },
        err => { 
          console.log(err);
          
        }
      );
    });
  }


  userDetails;

  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userDetails.notes.reverse();
        this.userService.setData(this.userDetails.email);
      },
      err => { 
        console.log(err);
        
      }
    );

  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['']);
  }
}
