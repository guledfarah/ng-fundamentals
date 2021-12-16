import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventService,
  EventRouteActivatorService,
  EventListResolver,
  EventsListComponnet,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import{
  ToastrService,
  CollapsibleWellComponent

} from './Common/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarcomponent } from "./nav/navbar.component";
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    Error404Component,
    EventsAppComponent,
    EventsListComponnet,
    EventThumbnailComponent,
    NavBarcomponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolver,
    AuthService,
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
