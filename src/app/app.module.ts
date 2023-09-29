import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HotelAddEditComponent } from './hotel-add-edit/hotel-add-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { HomeDisplayHotelsComponent } from './home-display-hotels/home-display-hotels.component';
import { MatSliderModule } from '@angular/material/slider';
import { HotelDisplayAdminComponent } from './hotel-display-admin/hotel-display-admin.component';
import {MatCardModule} from '@angular/material/card';
import { RoomTypeComponent } from './room-type/room-type.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { MatInput } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContractsAdminComponent } from './contracts-admin/contracts-admin.component';
import { ContractAddEditComponent } from './contract-add-edit/contract-add-edit.component';
import { SeasonDisplayAdminComponent } from './season-display-admin/season-display-admin.component';
import { SupplementDisplayAdminComponent } from './supplement-display-admin/supplement-display-admin.component';
import { RoomTypeDisplayAdminComponent } from './room-type-display-admin/room-type-display-admin.component';
import { RoomPricesDisplayAdminComponent } from './room-prices-display-admin/room-prices-display-admin.component';
import { SupplementPricesDisplayAdminComponent } from './supplement-prices-display-admin/supplement-prices-display-admin.component';
import { ReservationDisplayAdminComponent } from './reservation-display-admin/reservation-display-admin.component';
import { DeleteConfirmationDialogComponentComponent } from './delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelAddEditComponent,
    HomeDisplayHotelsComponent,
    HotelDisplayAdminComponent,
    RoomTypeComponent,
    SlideBarComponent,
    AboutUsComponent,
    BookingComponent,
    TestComponent,
    GridListComponent,
    ContactComponent,
    HomePageComponent,
    ContractsAdminComponent,
    ContractAddEditComponent,
    SeasonDisplayAdminComponent,
    SupplementDisplayAdminComponent,
    RoomTypeDisplayAdminComponent,
    RoomPricesDisplayAdminComponent,
    SupplementPricesDisplayAdminComponent,
    ReservationDisplayAdminComponent,
    DeleteConfirmationDialogComponentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    MatGridListModule,
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
