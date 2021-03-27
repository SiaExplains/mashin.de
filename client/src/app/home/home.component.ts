import {Component, OnDestroy, OnInit} from '@angular/core';
import { listingTypeConst } from 'src/app/_helpers/const//listingType';
import { imageUrlsObj } from '../_helpers/const/imageUrlsObj';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  listingTypes: string[] = listingTypeConst;
  activeType: string = this.listingTypes[0];
  i = 0;
  imageUrls: string[] = imageUrlsObj;

	constructor() {
	}

	ngOnInit() {
	}

  setActive(type: string) {
    this.activeType = type;
  }

  setBackgroundImage() {
    if(this.i < this.imageUrls.length - 1) {
      this.i = this.i +1;
    }
  }

	ngOnDestroy() {

	}
}
