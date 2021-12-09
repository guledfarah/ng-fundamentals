import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
<div class="event-container">
<img [src]="event?.imageUrl" [alt]="event?.name">

<div class="row">
<div class="col-md-11">
  <h2>{{event?.name}} </h2>
</div>
</div>

<div class="row">
<div class="col-md-6">
  <div><strong>Date:</strong> {{event?.date}}</div>
  <div><strong>Time:</strong> {{event?.time}}</div>
  <div><strong>Price:</strong> \${{event?.price}}</div>
</div>
<div class="col-md-6" *ngIf="event?.location">
  <address>
    <strong>Address:</strong><br />
    {{event?.location?.address}}<br />
    {{event?.location?.city}}, {{event?.location?.country}}
  </address>
</div>
<div class="col-md-6" *ngIf="event?.onlineUrl">
  <address>
  <strong>Url:</strong><br />
  {{event?.onlineUrl}}<br />
  </address>
</div>
</div>
</div>
`,
styles:[`
   .event-container {color:#bbb; background-color:#2d3339; margin: 3px; padding:10px; min-hieght:250px}
img {width:25%; max-height:120px}


   `
]
})
export class EventThumbnailComponent {
   @Input() event: any
}