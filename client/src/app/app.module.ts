import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HeaderComponent } from './_shared.module/header.component/header.component';
import { FooterComponent } from './_shared.module/footer.component/footer.component';
import { SharedModule } from './_shared.module/shared.module';
import { HomeModule } from './home/home.module';
import { ListingModule } from './listing/listing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    SharedModule,
    HomeModule,
    ListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
