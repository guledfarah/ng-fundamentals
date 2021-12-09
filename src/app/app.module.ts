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
import { CreateEventComponent } from './events/create-event.component';

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
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkUnsavedState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkUnsavedState(component:CreateEventComponent){

  if(!component.isDataSaved)
    return window.confirm('You have unsaved work, do you want to disregard?')
  return true
}
