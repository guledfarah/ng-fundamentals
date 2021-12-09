import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponnet } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarcomponent } from "./nav/navbar.component";
import { EventService } from "./events/Shared/event.service";
import { ToastrService } from "./Common/toastr.service";
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponnet,
    EventThumbnailComponent,
    NavBarcomponent,
    EventDetailsComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
