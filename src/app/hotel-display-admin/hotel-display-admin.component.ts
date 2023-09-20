import { Component ,OnInit, ViewChild,ElementRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelAddEditComponent } from '../hotel-add-edit/hotel-add-edit.component';
import { HotelService } from '../services/hotels.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from '../services/hotel';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-hotel-display-admin',
  templateUrl: './hotel-display-admin.component.html',
  styleUrls: ['./hotel-display-admin.component.css']
})
export class HotelDisplayAdminComponent implements OnInit {

  displayedColumns: string[] = [
    'hotelID',
    'hotelName',
    'location',
    'hotelEmail',
    'description',
    'hotelPhoneNumber',
    'action',
  ];

  dataSource!: MatTableDataSource<Hotel>;
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _dialog: MatDialog, 
    private _hotelService: HotelService,
    private _coreService:CoreService) {}

  ngOnInit(): void {
    this.getHotelList();
  }

  openAddEditHotelForm() {
    const dialogRef=this._dialog.open(HotelAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val)=>{
        if(val){
          this.getHotelList();
        }
      }
    })
  }

  onSliderChange(event: any) {
    const sliderValue = event.value;
    console.log('Slider value changed:', sliderValue);
  }


  public getHotelList(): void {
    this._hotelService.getHotels().subscribe({
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


  public openEditForm(data:Hotel){
    const dialogRef=this._dialog.open(HotelAddEditComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val)=>{
        if(val){
          this.getHotelList();
        }
      }
    })
  }

  public onDeleteEmloyee(hotelID: number): void {
    this._hotelService.deleteHotel(hotelID).subscribe(
      (response: void) => {
        this._coreService.openSnackBar('Hotel deleted successfully!','done');
        console.log(response);
        this.getHotelList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
