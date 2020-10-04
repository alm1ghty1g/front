import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";
import {Router} from "@angular/router";
import {User} from "../../model/User";
import {FormGroup, FormControl, FormArray, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router) {

  }

  user = new User();

  isCorrectPassword: boolean;


  ngOnInit() {

    console.log("----> here");
    this.loginForm = new FormGroup({

      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      // phoneNumber: new FormControl(null, [this.phoneUniqueValidator]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(17), Validators.maxLength(17)]),
      password: new FormControl(null, [Validators.required, passwordMatchValidator]),
      newPassword: new FormControl(null, Validators.required),
      newPasswordConfirmation: new FormControl(null, Validators.required),

    });

    const account = this.userService.currentUserValue.account;

    console.log(account);
    this.userService.findUser(account).subscribe(u => {
      // console.log(u);
      // console.log(u[0].email);

      console.log(u[0].password);
      console.log(u[0].newPassword);
      console.log(u[0].newPasswordConfirmation);
      //this.loginForm.addControl(   "firstName", new FormControl(u[0].firstName, Validators.required));
      this.loginForm.controls["firstName"].setValue(u[0].firstName);
      this.loginForm.controls["lastName"].setValue(u[0].lastName);
      this.loginForm.controls["email"].setValue(u[0].email);
      this.loginForm.controls["phoneNumber"].setValue(u[0].phoneNumber);
      // this.loginForm.controls["password"].setValue(u[0].password);
      this.loginForm.controls["newPassword"].setValue(u[0].newPassword);
      this.loginForm.controls["newPasswordConfirmation"].setValue(u[0].newPasswordConfirmation);

      this.isCorrectPassword = true;
    }, error => {
      console.log(error);
    });

  }

  update() {

    this.user.firstName = this.loginForm.controls["firstName"].value;
    this.user.lastName = this.loginForm.controls["lastName"].value;
    this.user.email = this.loginForm.controls["email"].value;
    this.user.phoneNumber = this.loginForm.controls["phoneNumber"].value;
    this.user.password = this.loginForm.controls["password"].value;
    this.user.newPassword = this.loginForm.controls["newPassword"].value;
    this.user.newPasswordConfirmation = this.loginForm.controls["newPasswordConfirmation"].value;

    console.log(this.user.newPasswordConfirmation);
    console.log(this.user.newPassword);

    this.userService.updateUser(this.user).subscribe(user => {this.user = user; this.isCorrectPassword = true}, error => {
      this.isCorrectPassword = false;
      console.log(error)
    });

    console.log(this.user);

  }

  onSubmit() {
    this.update();
  }

  phoneUniqueValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) && control.value > 5 && control.value < 10)) {
      return {'phoneNumber': true};
    }
    return null;
  }


  addPhone() {
  }
}

function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  console.log(control.value);
  if (control.value !== undefined) {
    return {'password': true};
  }
  return null;
}

// ^(([+]\d{2}[ ][1-9]\d{0,2}[ ])| +46 8 123 456 78

// ([0]\d{1,3}[-]))((\d{2}([ ]\d{2}){2})|  08-123 456 78

// (\d{3}([ ]\d{3})*([ ]\d{2})+))$ | 0123-456 78

// +38 068 2 864 864 | ^(([+]\d{2}[-]))(\d{3}[-]\d{3}[-]\d{3})

// ||  correct

//+46 08-123 456 78 | 08 123 456 78 | 0123 456 78 incorrect

