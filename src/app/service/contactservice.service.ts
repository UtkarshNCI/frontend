import { Injectable } from '@angular/core';
import { Http,Response, RequestOptions,Headers } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contactdetails } from '../models/contactModels';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  public apiURL:string="http://localhost:8080/buildMyPc/Comman/contactus";
  constructor(private http:Http) {this.http=http; }

  contactFunc(msg:any){
    const headers = new Headers({'Content-Type':'application/json'});
    const requestOptions= new RequestOptions({headers :headers});
    return this.http.post(this.apiURL,msg,requestOptions);
  }


}
