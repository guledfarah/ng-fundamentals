import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./Shared/event.service";

@Component({
    templateUrl:'./create-event.component.html',
    styles:[
        `
        em {float:right; color:#E05C65; padding-left: 10px}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :ms-input-placeholder {color: #999;}
        .preview-event-image {width:50%; padding-top:10px}
        `
      ]
})

export class CreateEventComponent{

    event

    isDataSaved:boolean = false

    constructor(private _router : Router, private _eventService : EventService){}

    cancel(){
        this._router.navigate(['/events'])
    }

    saveEvent(formValues){
        this._eventService.SaveEvent(formValues)
        this.isDataSaved = true
        this._router.navigate(['/events'])

    }
}