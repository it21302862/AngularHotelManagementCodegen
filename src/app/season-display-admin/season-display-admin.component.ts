import { Component,OnInit, ViewChild } from '@angular/core';
import { SeasonDTO } from '../services/SeasonDTO';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HotelService } from '../services/hotels.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-season-display-admin',
  templateUrl: './season-display-admin.component.html',
  styleUrls: ['./season-display-admin.component.css']
})
export class SeasonDisplayAdminComponent  implements OnInit{

  displayedColumns: string[] = [
    'seasonID',
    'seasonName',
    'startDate',
    'endDate',
    'contractID',
    'action',
  ];

  dataSource!: MatTableDataSource<SeasonDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _hotelService: HotelService,private _coreService:CoreService){}


  ngOnInit(): void {
    this.getSeasonsList();
  }

  onSliderChange(event: any) {
    const sliderValue = event.value;
    console.log('Slider value changed:', sliderValue);
  }

  public getSeasonsList(): void {
    this._hotelService.getAllSeasons().subscribe({
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

  public onDeleteSeason(seasonID: number): void {
    this._hotelService.deleteSeason(seasonID).subscribe(
      (response: void) => {
        this._coreService.openSnackBar('Season deleted successfully!','done');
        console.log(response);
        this.getSeasonsList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
