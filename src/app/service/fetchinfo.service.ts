import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 


@Injectable({
  providedIn: 'root'
})
export class FetchinfoService {

  constructor(private http:Http) {this.http=http; }
  public apiURL:string="http://localhost:8080/buildMyPc/common/product";
  fetchProduct(category:any){  
      return this.http.get(this.apiURL+"/"+category);
    }
}
