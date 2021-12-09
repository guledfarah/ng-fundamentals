import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventsListComponnet } from "./events/events-list.component";

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponnet },
    { path: 'event/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]