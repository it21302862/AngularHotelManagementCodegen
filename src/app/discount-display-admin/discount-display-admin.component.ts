import { Component,OnInit, ViewChild, } from '@angular/core';
import { HotelService } from '../services/hotels.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreService } from '../core/core.service';
import { DeleteConfirmationDialogComponentComponent } from '../delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';
import { Discount } from '../services/Discount';

@Component({
  selector: 'app-discount-display-admin',
  templateUrl: './discount-display-admin.component.html',
  styleUrls: ['./discount-display-admin.component.css']
})
export class DiscountDisplayAdminComponent implements OnInit{

  displayedColumns: string[] = [
    'discountID',
    'discountPercentage',
    'noOfDates',
    'contractID',
    'action',
  ];

  dataSource!: MatTableDataSource<Discount>;
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _dialog: MatDialog, 
    private _hotelService: HotelService,
    private _coreService:CoreService) {}

    ngOnInit(): void {
      this.getAllDiscounts();
    }

    onSliderChange(event: any) {
      const sliderValue = event.value;
      console.log('Slider value changed:', sliderValue);
    }

    public getAllDiscounts(): void {
      this._hotelService.getAllDiscounts().subscribe({
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

    public openDeleteConfirmationDialog(discountID: number): void {
      const dialogRef = this._dialog.open(DeleteConfirmationDialogComponentComponent, {
        width: '250px',
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'yes') {
          this.onDeleteDiscount(discountID);
        }
      });
    }
  
    public onDeleteDiscount(discountID: number): void {
      this._hotelService.deleteDiscount(discountID).subscribe(
        (response: void) => {
          this._coreService.openSnackBar('Discount deleted successfully!','done');
          console.log(response);
          this.getAllDiscounts();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

}
