import {User} from "../model/User";
import {url} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class UserService {



  constructor(private http: HttpClient) {
  }

  signUp(user: User):Observable<User> {
    const signUpUrl = `${url}/user/register`;

    return this.http.post<User>(signUpUrl, user);
  }

}
