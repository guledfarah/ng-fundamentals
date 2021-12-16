import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{

    currentUser:IUser

    //Authenticate the user and save session
    loginUser(userName:string, password:string){
        this.currentUser = {
            id:1,
            userName: userName,
            firstName: 'Farah',
            lastName: 'Papa'
        }

    }

    //Check if the current user is authenticated
    isAuthenticated(){
        return !!this.currentUser;
    }

    addOrUpdateUserProfileData(firstName: any, lastName: any) {
        if(this.currentUser != null){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        }
      }
}