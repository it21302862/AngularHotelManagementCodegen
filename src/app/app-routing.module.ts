import { NgModule } from '@angular/core';
import { HomeDisplayHotelsComponent } from './home-display-hotels/home-display-hotels.component';
import { HotelDisplayAdminComponent } from './hotel-display-admin/hotel-display-admin.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { RouterModule, Routes } from '@angular/router';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component'; 
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContractsAdminComponent } from './contracts-admin/contracts-admin.component';
import { SeasonDisplayAdminComponent } from './season-display-admin/season-display-admin.component';
import { SupplementDisplayAdminComponent } from './supplement-display-admin/supplement-display-admin.component';
import { RoomTypeDisplayAdminComponent } from './room-type-display-admin/room-type-display-admin.component';
import { RoomPricesDisplayAdminComponent } from './room-prices-display-admin/room-prices-display-admin.component';
import { SupplementPricesDisplayAdminComponent } from './supplement-prices-display-admin/supplement-prices-display-admin.component';
import { ReservationDisplayAdminComponent } from './reservation-display-admin/reservation-display-admin.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  { path: 'hotels', component: HomeDisplayHotelsComponent },
  { path: 'admin', component: HotelDisplayAdminComponent },
  { path: 'contracts', component: ContractsAdminComponent },
  { path: 'seasons', component: SeasonDisplayAdminComponent },
  { path: 'supplements', component: SupplementDisplayAdminComponent },
  { path: 'roomtypes', component: RoomTypeDisplayAdminComponent},
  { path: 'roomtypeprices', component: RoomPricesDisplayAdminComponent},
  { path: 'supplementprices', component: SupplementPricesDisplayAdminComponent},
  { path: 'reservations', component: ReservationDisplayAdminComponent},
  { path: 'room-types/:hotelID', component: RoomTypeComponent },
  { path: 'dashboard', component: SlideBarComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
