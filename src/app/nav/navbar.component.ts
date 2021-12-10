import { Component } from "@angular/core";

@Component({

    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [
        `
        #SearchForm {margin-right: 100px}
        li > a.active {color:#f97924 !important}
    `
    ]
})

export class NavBarcomponent {

}