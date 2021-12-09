import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component, OnInit } from "@angular/core";
import { EventService } from "./Shared/event.service";

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponnet implements OnInit {
    title = "Upcoming Events List"
    events: any
    constructor(private _eventService: EventService) {}
    ngOnInit(): void {
        this.events = this._eventService.getEvents()
    }
}
