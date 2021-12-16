import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-well',
    template:`
    <div (click)="toggleContentVisibility()" class="well pointable">

        <h4 class="well-title">    
        <ng-content select="[well-title]"></ng-content> 
        </h4>

        <ng-content *ngIf="isContentVisible" select="[well-body]"></ng-content>
        
    </div>
    `

})

export class CollapsibleWellComponent{
    //define and set a flag for content visibility
    isContentVisible : boolean = false

    //toggle visibility
    toggleContentVisibility(){
        this.isContentVisible = !this.isContentVisible
    }
}