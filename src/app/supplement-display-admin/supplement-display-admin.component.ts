import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HotelService } from '../services/hotels.service';
import { SupplementDTO } from '../services/SupplementDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreService } from '../core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponentComponent } from '../delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';

@Component({
  selector: 'app-supplement-display-admin',
  templateUrl: './supplement-display-admin.component.html',
  styleUrls: ['./supplement-display-admin.component.css']
})
export class SupplementDisplayAdminComponent implements OnInit{

  displayedColumns: string[] = [
    'supplementID',
    'supplementName',
    'contractID',
    'action'
  ];

  dataSource!: MatTableDataSource<SupplementDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _hotelService: HotelService,private _coreService:CoreService,private dialog: MatDialog){}

  onSliderChange(event: any) {
    const sliderValue = event.value;
    console.log('Slider value changed:', sliderValue);
  }

  ngOnInit(): void {
    this. getSupplementList();
  }

  public getSupplementList(): void {
    this._hotelService.getAllSupplements().subscribe({
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

  public openDeleteConfirmationDialog(supplementID: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponentComponent, {
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.onDeleteSupplement(supplementID);
      }
    });
  }
  public onDeleteSupplement(supplementID: number): void {
    this._hotelService.deleteSupplement(supplementID).subscribe(
      (response: void) => {
        this._coreService.openSnackBar('Supplement deleted successfully!','done');
        console.log(response);
        this.getSupplementList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
