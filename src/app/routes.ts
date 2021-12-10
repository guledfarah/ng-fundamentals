import {
    EventRouteActivatorService,
    EventListResolver,
    EventsListComponnet,
    EventDetailsComponent,
    CreateEventComponent
  } from './events/index'

import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [
    {path: 'event/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponnet, resolve:{events:EventListResolver} },
    { path: 'event/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path:'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }
]