import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListingComponent} from './listing.component';
import {ListingService} from './listing.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
      ListingComponent
    ],
    exports: [
      ListingComponent
    ],
    providers: [
        ListingService
    ]
})
export class ListingModule {
}
