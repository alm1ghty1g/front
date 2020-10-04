import {User} from "../model/User";
import {url} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {LoginRequest} from "../model/login-request";
import {JwtResponse} from "../response/JwtResponse";
import {catchError, tap} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class UserService {

  id: number;


  public currentUserSubject: BehaviorSubject<JwtResponse>;
  public currentUser: Observable<JwtResponse>;
  public nameTerms = new Subject<string>();
  public name$ = this.nameTerms.asObservable();


  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    const memo = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo));
    this.currentUser = this.currentUserSubject.asObservable();
    cookieService.set('currentUser', memo);
  }


  get currentUserValue() {
    return this.currentUserSubject.value;
  }


  login(loginRequest) {

    const signInUrl = `${url}/user/login`;

    return this.http.post<JwtResponse>(signInUrl, loginRequest).pipe(
      tap(u => {
        if (u && u.token) {
          this.cookieService.set('currentUser', JSON.stringify(u));
          this.currentUserSubject.next(u);
          return u;
        }
      }),
      catchError(err => {
        console.log("PROBLEM WITH SIGN IN");
        console.log(err);
        return of(err)
      })
    );

  }


  signUp(user: User): Observable<User> {
    const signUpUrl = `${url}/user/register`;

    return this.http.post<User>(signUpUrl, user);
  }


  findUser(email: string): Observable<User> {
    const findUserUrl = `${url}/user/find-by/${email}`;
    return this.http.get<User>(findUserUrl);
  }


  updateUser(user: User): Observable<User> {

    const updateUserUrl = `${url}/user/update`;
    // user.password = user.newPasswordConfirmation;
    console.log(user);
    console.log(user.newPasswordConfirmation);

    return this.http.post<User>(updateUserUrl, user);
  }



}
