import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelAddEditComponent } from './hotel-add-edit/hotel-add-edit.component';
import { HomeDisplayHotelsComponent } from './home-display-hotels/home-display-hotels.component';
import { HotelService } from './services/hotels.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from './services/hotel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  
}
