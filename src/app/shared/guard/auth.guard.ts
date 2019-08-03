import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
     role:string="USER";
     role2:string="ADMIN";
    canActivate() {

        console.log((localStorage.getItem('role')));

        if ((localStorage.getItem('role'))=='"ADMIN"')
        {
            console.log("inside canActivate");
            return true;
        }
        // else 
        // if ((localStorage.getItem('role'))==this.role2)
        // {
        //     console.log("inside canActivate in admin");
        //     return true;
        // }
        else{
        this.router.navigate(['']);
        return false;
        }
    
    }
}
