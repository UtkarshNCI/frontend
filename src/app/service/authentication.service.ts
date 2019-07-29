import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Http, Response ,RequestOptions,Headers} from '@angular/http';  
import { Observable, of, throwError, pipe} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public apiURL:string="http://localhost:8080/buildMyPc/common/login";
  
  constructor(private http:Http) {this.http=http; }
 
  ValidateUser (user:any)
  { //console.log(user);
    //var userData = "username=" + user.UserName + "&password=" + user.Password + "&grant_type=password";
    const headers = new Headers({'Content-Type':'application/json'});
    const requestOptions= new RequestOptions({headers :headers});
    //console.log(userData);
    console.log(user);
    return this.http.post(this.apiURL,user,requestOptions);
    // .pipe(
    //   map(res => res),
    //    catchError( this.errorHandler)
    //   );
  }
  getClaims ()
  {
        var headers = new Headers({'Authorization':'Bearer '+this.getToken(),'Content-Type':'application/json'});
        const requestOptions= new RequestOptions({headers :headers});
    return this.http.get(this.apiURL+ '/Login',requestOptions)
    .pipe(
      map(res => res),
       catchError( this.errorHandler)
      );
  }
  public isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
  storeToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  removeToken() {
    return localStorage.removeItem("token");
  }
  storeRole(role: any) {
    this.removeRole();
    localStorage.setItem('role', JSON.stringify(role));
  }
  getRole() {
    // return localStorage.getItem("role");
    return JSON.parse(localStorage.getItem('role'));
  }
  removeRole() {
    return localStorage.removeItem("role");
  }
  errorHandler(error: Response) {  
    console.log(error);  
    return throwError(error);  
} 
}