import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animatons';
import {AuthenticationService} from '../service/authentication.service';
import * as jwt_decode from 'jwt-decode';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Registration} from '../models/userModel';
import {RegistrationService} from '../service/registration.service';
import { Global } from '../shared/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  
  closeResult: string;
  // registrationForm: FormGroup;
  loginForm:FormGroup;
  // registrationInputs: Registration[];
  currentUser: Registration[];
  

  cartItemCount:number=0;
  approvalText:string="";

  @Input()
  public alerts: Array<IAlert> = [];

  message = "";
  public globalResponse: any;

  constructor( private fb: FormBuilder,private regService:RegistrationService,private authService:AuthenticationService,public router:Router ,private globals:Global) {

  }
  ngOnInit()
  {
    // this.registrationForm = this.fb.group({
    //   name:  ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
    //   password:['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
    //   email:['',Validators.compose([Validators.required,Validators.email])],
    //   mob:['',Validators.required],
    //   dob:[''],
    // });
    this.loginForm = this.fb.group({
      email:  ['', [Validators.required]],
      password:['',[Validators.required]],
    });
  }

 
  Login()
  {
    let user=this.loginForm.value;
    this.globals.isLoggedIn=false;
    localStorage.setItem('isLoggedin', 'false');   
    this.authService.removeToken();
    this.alerts=[];
    //console.log(user);
        this.authService.ValidateUser(user)
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { //This is error part
              console.log(error.message);
              this.alerts.push({
                id: 2,
                type: 'danger',
                message: 'Either user name or password is incorrect.'
              });
            },
            () => {
                //This is Success part
                //console.log(this.globalResponse._body);
                var token = this.globalResponse._body;
                var decoded = jwt_decode(token); 
                //console.log(decoded.role);  //prinitng role               
                console.log(decoded.sub);
                this.authService.storeToken(this.globalResponse._body);  
                this.authService.storeRole(decoded.role);
                localStorage.setItem('email',decoded.sub);
                 this.alerts.push({
                   id: 1,
                   type: 'success',
                   message: 'Login successful. Now you can close and proceed further.',
                 });
                 this.globals.isLoggedIn=true;
                 console.log("in login"+this.globals.isLoggedIn);
                //  console.log("success");
                 //this.GetClaims();
                 this.router.navigateByUrl("");
                localStorage.setItem('isLoggedin', 'true');             
                }
            )
  }
  

  

  // GetClaims() this code is jwt token which is already done above
  // {
  //       this.authService.getClaims()
  //           .subscribe((result) => {
  //             this.globalResponse = result;              
  //           },
  //           error => { //This is error part
  //             console.log(error.message);
  //           },
  //           () => {
  //               //  This is Success part
  //              console.log(this.globalResponse );
  //               let a=this.globalResponse;
  //               this.currentUser=this.globalResponse;
  //               this.authService.storeRole(this.currentUser);
  //               }
  //             )
            
  // } 
  LogOut()
  {
    this.globals.isLoggedIn=false;
    this.authService.removeToken();
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('email');
  }
 

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}



