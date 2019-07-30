import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animatons';
import {AuthenticationService} from '../../service/authentication.service';
import * as jwt_decode from 'jwt-decode';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Registration} from '../../models/userModel';
import {RegistrationService} from '../../service/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations:[routerTransition()]
})
export class SignupComponent implements OnInit {


  closeResult: string;
  registrationForm: FormGroup;
  loginForm:FormGroup;
  registrationInputs: Registration[];
  currentUser: Registration[];
  isLoggedIn:boolean=false;

  cartItemCount:number=0;
  approvalText:string="";

  @Input()
  public alerts: Array<IAlert> = [];

  message = "";
  public globalResponse: any;

  constructor(private route:Router, private fb: FormBuilder,private regService:RegistrationService,private authService:AuthenticationService ) {

  }
  ngOnInit()
  {
    this.registrationForm = this.fb.group({
      name:  ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
      password:['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      mob:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      dob:['',Validators.compose([Validators.required])],
    });
    
  }

  OnRegister()
  { 
    let ngbdate=this.registrationForm.controls['dob'].value;
    let month = ngbdate.month;
    if(month<10){
         month = "0"+ngbdate.month;
    }
    let day = ngbdate.day;
    if(day<10){
      day = "0"+ngbdate.day;
    } 
    let mydate= ngbdate.year+"-"+month+"-"+day;

    this.registrationInputs=this.registrationForm.value;
    this.registrationInputs['dob']=mydate;
    console.log(this.registrationInputs);
        this.regService.RegisterUser(this.registrationInputs)
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { //This is error part
              this.alerts.push({
                id: 2,
                type: 'danger',
                message: 'Registration failed with fallowing error:'+error,
              });
            },
            () => {
                //  This is Success part
                this.alerts.push({
                  id: 1,
                  type: 'success',
                  message: 'Registration successful.',
                });
                this.route.navigateByUrl("");
                }
              )
            }
     public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  } 
  

  GetClaims()
  {
        this.authService.getClaims()
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { //This is error part
              console.log(error.message);
            },
            () => {
                //  This is Success part
               console.log(this.globalResponse );
                let a=this.globalResponse;
                this.currentUser=this.globalResponse;
                this.authService.storeRole(this.currentUser);
                }
              )
            
  } 
  LogOut()
  {
    this.isLoggedIn=false;
    this.authService.removeToken();
  }
 

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

