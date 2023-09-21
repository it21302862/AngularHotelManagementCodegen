import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HotelService } from '../services/hotels.service';
import { RoomTypeDTO } from '../services/RoomTypeDTO';

@Component({
  selector: 'app-room-type-display-admin',
  templateUrl: './room-type-display-admin.component.html',
  styleUrls: ['./room-type-display-admin.component.css']
})
export class RoomTypeDisplayAdminComponent implements OnInit{

  displayedColumns: string[] = [
    'roomTypeID',
    'roomType',
    'noOfRooms',
    'maxAdults',
    'contractID'
  ];

  dataSource!: MatTableDataSource<RoomTypeDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _hotelService: HotelService){}


  ngOnInit(): void {
    this.getRoomTypesList();
  }

  onSliderChange(event: any) {
    const sliderValue = event.value;
    console.log('Slider value changed:', sliderValue);
  }

  public getRoomTypesList(): void {
    this._hotelService.getAllRoomTypes().subscribe({
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
