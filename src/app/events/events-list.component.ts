import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from ".";
import { EventService } from "./Shared/event.service";

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponnet implements OnInit {
    title = "Upcoming Events List"
    events: IEvent[]
    constructor(private _eventService: EventService, private _route : ActivatedRoute) {}
    ngOnInit(): void {
        this.events = this._route.snapshot.data['events']
    }
}
