import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.userService.signUp(this.user).subscribe(u => {
      this.router.navigate(['/register'])
    }, error => {
      console.log(error);
    })

  }

}
