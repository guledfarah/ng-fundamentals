import { Component, Input } from "@angular/core";
import { ISession } from "..";

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html',
    styles:[
        `
        .event-container {color:#bbb; background-color:#2d3339; margin: 3px; padding:10px; min-hieght:250px; padding-left:20px; padding-right: 20px}
        .well div {color: #bbb;}
        `
    ]
})

export class SessionListComponent{
    @Input()
    sessions : ISession[]

}