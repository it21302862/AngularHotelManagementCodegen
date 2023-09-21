import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HotelService } from '../services/hotels.service';
import { RoomTypePriceDTO } from '../services/RoomTypePriceDTO';

@Component({
  selector: 'app-room-prices-display-admin',
  templateUrl: './room-prices-display-admin.component.html',
  styleUrls: ['./room-prices-display-admin.component.css']
})
export class RoomPricesDisplayAdminComponent implements OnInit{

  displayedColumns: string[] = [
    'seasonName',
    'roomType',
    'price',
    'description',
    'contractID',
    'seasonID',
    'roomTypeID'
  ];


  dataSource!: MatTableDataSource<RoomTypePriceDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _hotelService: HotelService){}

  ngOnInit(): void {
    this.getRoomTypePriceList();
  }

  onSliderChange(event: any) {
    const sliderValue = event.value;
    console.log('Slider value changed:', sliderValue);
  }

  public getRoomTypePriceList(): void {
    this._hotelService.getAllRoomTypePrices().subscribe({
      next: (res) => {
        console.log('Data received from API:', res);
        if (Array.isArray(res)) {
          this.dataSource = new MatTableDataSource(res);
        } else if (typeof res === 'object' && 'content' in res && Array.isArray(res['content'])) {
          const contentArray = res['content'];
          this.dataSource = new MatTableDataSource(contentArray);
        } else {
          console.error('Unexpected API response format:', res);
        }
  
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
