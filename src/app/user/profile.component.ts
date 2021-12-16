import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
  styles:[
    `
    em {float:right; color:#E05C65; padding-left: 10px}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
    `
  ]
})

export class ProfileComponent implements OnInit {

  profileForm: FormGroup
  private _firstName : FormControl
  private _lastName : FormControl


  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {

    this._firstName = new FormControl(
      this._authService.currentUser?.firstName,
      [
        Validators.required, 
        Validators.pattern('[a-zA-Z].*')
      ])

    this._lastName = new FormControl(
      this._authService.currentUser?.lastName,
      [
        Validators.required, 
        Validators.pattern('[a-zA-Z].*')
      ])

    this.profileForm = new FormGroup({
      firstName: this._firstName,
      lastName: this._lastName
    })
  }

  isFormControlValid(control:string):boolean{
    if(control === "firstName")
      return this._firstName.valid
    if(control === "lastName")
      return this._lastName.valid
  }

  saveProfile(formValues) {
    this._authService.addOrUpdateUserProfileData(formValues.firstName, formValues.lastName)

    this._router.navigate(['/events'])
  }

  cancel() {
    this._router.navigate(['/events'])
  }

}