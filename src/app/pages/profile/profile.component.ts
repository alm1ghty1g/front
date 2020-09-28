import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";
import {Router} from "@angular/router";
import {User} from "../../model/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {

  }

  user = new User();


  ngOnInit() {

    console.log("----> here");

    const account = this.userService.currentUserValue.account;

    console.log(account);
    this.userService.findUser(account).subscribe(u => {
      console.log(u);
      console.log(u[0].email);

      this.user.firstName = u[0].firstName;
      this.user.lastName = u[0].lastName;
      this.user.email = u[0].email;
      this.user.phoneNumber = u[0].phoneNumber;
      this.user.password = "";

    }, error => {
      console.log(error);
    });

  }

  update() {

    console.log(this.user.newPasswordConfirmation);
    console.log(this.user.newPassword);
    this.userService.updateUser(this.user).subscribe(user => this.user = user);

  }

  onSubmit() {
    this.update();
  }


  addPhone() {
  }
}


