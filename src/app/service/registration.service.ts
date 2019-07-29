import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Http, Response, RequestOptions,Headers } from '@angular/http';  
import { Observable, of, throwError, pipe} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public apiURL:string="http://localhost:8080/buildMyPc/common/register";
  constructor(private http:Http) {this.http=http; }

  RegisterUser (user:any)
  { 
    const headers = new Headers({'Content-Type':'application/json'});
    const requestOptions= new RequestOptions({headers :headers});
    return this.http.post(this.apiURL,user,requestOptions);
    // .pipe(
    //   map(res => res),
    //    catchError( this.errorHandler)
    //   );
  }
  errorHandler(error: Response) {  
    console.log(error);  
    return throwError(error);  
} 

}