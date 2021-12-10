import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl:'./create-event.component.html'
})

export class CreateEventComponent{

    isDataSaved:boolean = false
    constructor(private _router : Router){}
    cancel(){
        this._router.navigate(['/events'])
    }
}