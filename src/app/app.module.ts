import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventService,
  EventRouteActivatorService,
  EventListResolver,
  EventsListComponnet,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarcomponent } from "./nav/navbar.component";
import { ToastrService } from "./Common/toastr.service";
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';


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
    EventListResolver,
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
