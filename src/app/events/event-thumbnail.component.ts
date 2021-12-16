import { Component, Input } from "@angular/core";
import { IEvent } from ".";

@Component({
    selector: 'event-thumbnail',
    template: `
<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">

<h2>{{event?.name | titlecase}} </h2>

<div>Date: {{event?.date | date:'shortDate'}}</div>
<div>Time: {{event?.time}}</div>
<div>Price: {{event?.price | currency:'USD'}}</div>


<div *ngIf="event?.location">
    <span>Address: </span>
    <span>{{event?.location?.address}}</span>
    <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
</div>

<div *ngIf="event?.onlineUrl">
  <span>Url: </span>
  <span>{{event?.onlineUrl}}</span>
</div>

</div>
`,
styles:[`
   .event-container {color:#bbb; background-color:#2d3339; margin: 3px; padding:10px; min-hieght:250px; padding-left:20px; padding-right: 20px}
    img {width:25%; max-height:120px;}
    .thumbnail {min-height: 210px;}
    .well div {color: #bbb;}
   `
]
})
export class EventThumbnailComponent {
   @Input() event: IEvent

}