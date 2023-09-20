import { Component,Inject,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Hotel } from '../services/hotel';
import { HotelService } from '../services/hotels.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-hotel-add-edit',
  templateUrl: './hotel-add-edit.component.html',
  styleUrls: ['./hotel-add-edit.component.css']
})
export class HotelAddEditComponent implements OnInit{

  hotelForm: FormGroup;


  constructor(private _fb:FormBuilder,
    private _hotelService:HotelService,
    private _dialogRef:MatDialogRef<HotelAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Hotel,
    private _coreService:CoreService
      
    ){
    this.hotelForm=this._fb.group({
      hotelID:0,
      hotelName: '',
      location: '',
      hotelEmail:'',
      description:'',
      hotelPhoneNumber:'',
      imgUrl:'',
      
    })
  }

  ngOnInit(): void {
    this.hotelForm.patchValue(this.data);
  }


  onFormSubmit() {
    if (this.hotelForm.valid) {
      if(this.data){
        this._hotelService.updateHotel(this.hotelForm.value).subscribe({
          next: (val: Hotel) => {
            this._coreService.openSnackBar('Hotel updated successfully!','done');
            this._dialogRef.close(true);
            
          },
          error: (err: any) => {
            console.error(err);
          }
        });

      }else{
      this._hotelService.addHotel(this.hotelForm.value).subscribe({
        next: (val: Hotel) => {
          this._coreService.openSnackBar('Hotel added successfully!','done');
          this._dialogRef.close(true);
          
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
    }
  }



}
