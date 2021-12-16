import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl:'./login.component.html',
    styles:[
        `
            em {float:right; color:#E05C65; padding-left:10px;}
        `
    ]
})

export class LoginComponent{

    userName
    password
    mouseOverLoginButton

    constructor(private _authService : AuthService, private _router : Router){}

    login(formValues){
        this._authService.loginUser(formValues.userName, formValues.password)

        if(this._authService.isAuthenticated())
            this._router.navigate(['/events'])
    }

    cancel(){
        this._router.navigate(['/events'])
    }
}