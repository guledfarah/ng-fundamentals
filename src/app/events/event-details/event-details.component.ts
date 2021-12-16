import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "src/app/Common/toastr.service";
import { IEvent, ISession } from "..";
import { EventService } from "../Shared/event.service";

@Component({
    templateUrl:'./event-details.component.html',
    styles:[
        `
        .container {padding-left:20px; padding-right: 20px}
        .event-image {width: 25%}
        a {cursor:pointer;}
        .add-session-link {float:right; color:#dd650d}

        `
    ]
})

export class EventDetailsComponent implements OnInit{

    //define event object
    event:IEvent

    //define a toggle for add/display sessions
    isInAddMode:boolean = false

    //inject eventservice, route and toastr
    constructor(private _eventService: EventService, private _route : ActivatedRoute, private _toastr : ToastrService){}

    ngOnInit(): void {
        this.event = this._eventService.getEvent(+this._route.snapshot.params['id'])
    }

    handleThumbnailClick(eventName){
     this._toastr.success(eventName, "Event")
    }

    addSession(){
        this.isInAddMode = true
    }

    saveNewSession(session:ISession){
        
        const lastIdUsed = Math.max.apply(null, this.event?.sessions?.map(s => s.id))
        const newSessionId = lastIdUsed == null ? 1 : lastIdUsed

        session.id = newSessionId
        
        this.event.sessions.push(session)

        this._eventService.updateEvent(this.event)

        this.isInAddMode = false

    }

    cancelNewSession(){
        this.isInAddMode = false
    }
}