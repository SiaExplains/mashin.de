import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerTabConst } from 'src/app/_helpers/const/headerTab';
import { HeaderTabModel } from 'src/app/_helpers/models/headerTabModel';

@Component({
    selector: 'mashinDE-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

   headerTabs: HeaderTabModel[] = headerTabConst;

    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    createListing() {
      this.router.navigate(['listing'])
    }

    ngOnDestroy() {

    }
}
