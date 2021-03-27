import {RouterModule, Routes} from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listing', component: ListingComponent},
]
export const AppRoutes = RouterModule.forRoot(routes);
