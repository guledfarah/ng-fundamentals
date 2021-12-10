import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "src/app/Common/toastr.service";
import { IEvent } from "..";
import { EventService } from "../Shared/event.service";

@Component({
    templateUrl:'./event-details.component.html',
    styles:[
        `
        .container {padding-left:20px; padding-right: 20px}
        .event-image {width: 25%}
        `
    ]
})

export class EventDetailsComponent implements OnInit{

    event:IEvent
    constructor(private _eventService: EventService, private _route : ActivatedRoute, private _toastr : ToastrService){}

    ngOnInit(): void {
        this.event = this._eventService.getEvent(+this._route.snapshot.params['id'])
    }

    handleThumbnailClick(eventName){
     this._toastr.success(eventName, "Event")
    }
}