import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponnet } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarcomponent } from "./nav/navbar.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponnet,
    EventThumbnailComponent,
    NavBarcomponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
