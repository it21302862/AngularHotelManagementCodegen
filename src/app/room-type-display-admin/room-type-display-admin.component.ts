import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HotelService } from '../services/hotels.service';
import { RoomTypeDTO } from '../services/RoomTypeDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreService } from '../core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponentComponent } from '../delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';

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
    'contractID',
    'action'
  ];

  dataSource!: MatTableDataSource<RoomTypeDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _hotelService: HotelService,private _coreService:CoreService,private dialog: MatDialog){}


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

  // public onDeleteRoomType(roomTypeID: number): void {
  //   this._hotelService.deleteRoomType(roomTypeID).subscribe(
  //     (response: void) => {
  //       this._coreService.openSnackBar('Room Type deleted successfully!','done');
  //       console.log(response);
  //       this.getRoomTypesList();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public openDeleteConfirmationDialog(roomTypeID: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponentComponent, {
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.onDeleteRoomType(roomTypeID);
      }
    });
  }
  
  public onDeleteRoomType(roomTypeID: number): void {
    this._hotelService.deleteRoomType(roomTypeID).subscribe(
      () => {
        this._coreService.openSnackBar('Room Type deleted successfully!', 'done');
        this.getRoomTypesList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
