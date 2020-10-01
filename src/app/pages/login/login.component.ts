import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user-service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginRequest} from "../../model/login-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginRequest: LoginRequest;
  userName: string;
  password : string;



  constructor(private userService: UserService,
              private router: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {

  this.loginRequest = new LoginRequest();

  }

  onSubmit() {
    this.loginRequest.username = this.userName;
    this.loginRequest.password = this.password;

    this.userService.login(this.loginRequest).subscribe(user => {
      if (user) {

        this.route.navigateByUrl("/profile");
        console.log("welcome " + user);
      }
    })
  }



}
