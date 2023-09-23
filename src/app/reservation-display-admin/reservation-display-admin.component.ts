import { Component,OnInit, ViewChild, } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { HotelService } from '../services/hotels.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationDTO } from '../services/ReservationDTO';

@Component({
  selector: 'app-reservation-display-admin',
  templateUrl: './reservation-display-admin.component.html',
  styleUrls: ['./reservation-display-admin.component.css']
})
export class ReservationDisplayAdminComponent implements OnInit{
  displayedColumns: string[] = [
    'reservationID',
    // 'contract',
    // 'seasonId',
    'bookingDate',
    'checkIn',
    'checkOut',
    'bookedRooms',
    'roomPrice',
    'roomPriceWithNoOfDates',
    'supplementPriceWithNoOfDates',
    'markupPrice',
    'discountPrice',
    'finalPrice',
    'type',
  ];

  dataSource!: MatTableDataSource<ReservationDTO>;
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _dialog: MatDialog, 
    private _hotelService: HotelService,
    private _coreService:CoreService) {}

    ngOnInit(): void {
      this.getAllReservations();
    }

  onSliderChange(event: any) {
    const sliderValue = event.value;
    console.log('Slider value changed:', sliderValue);
  }

  public getAllReservations(): void {
    this._hotelService.getAllReservations().subscribe({
      next: (res) => {
        if (Array.isArray(res)) {
          console.log('Data received from API:', res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log('Data assigned to dataSource:', this.dataSource);
        } else if (typeof res === 'object' && 'content' in res && Array.isArray(res['content'])) {
          // Handle API response with a 'content' property containing an array
          const contentArray = res['content'];
          console.log('Data received from API:', contentArray);
          this.dataSource = new MatTableDataSource(contentArray);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log('Data assigned to dataSource:', this.dataSource);
        } else {
          console.error('Unexpected API response format:', res);
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
