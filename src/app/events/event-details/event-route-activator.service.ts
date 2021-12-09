import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import { EventService } from "../Shared/event.service";

@Injectable()
export class EventRouteActivatorService implements CanActivate{

    constructor(private _eventService : EventService, private _router : Router){}
    
    canActivate(route: ActivatedRouteSnapshot){
        const isEventExists =  !!this._eventService.getEvent(+route.params['id'])

        if(!isEventExists)
            this._router.navigate(['/404'])
        return isEventExists
    }

}