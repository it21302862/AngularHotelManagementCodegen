import { Component, Inject, OnInit } from '@angular/core';
import { HotelContractDTO } from '../services/HotelContractDTO ';// Correct the import path
import { HotelService } from '../services/hotels.service';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms'; // Import AbstractControl
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { SeasonDTO } from '../services/SeasonDTO'; // Import the Season interface


@Component({
  selector: 'app-contract-add-edit',
  templateUrl: './contract-add-edit.component.html',
  styleUrls: ['./contract-add-edit.component.css']
})
export class ContractAddEditComponent implements OnInit {
  contractFormGroup!: FormGroup;
  seasons!: FormArray; // Define seasons as a FormArray
  supplements!:FormArray;
  roomTypes!:FormArray;
  roomTypePrices!:FormArray;
  supplementPrices!:FormArray;
  markupPrices!:FormArray;
  discounts!: FormGroup;
  

  constructor(
    private _fb: FormBuilder,
    private _hotelService: HotelService,
    private _dialogRef: MatDialogRef<ContractAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HotelContractDTO,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.contractFormGroup = this.createContractForm();
    this.seasons = this.contractFormGroup.get('seasons') as FormArray; // Initialize seasons as a FormArray
    this.supplements = this.contractFormGroup.get('supplements') as FormArray;
    this.roomTypes=this.contractFormGroup.get('roomTypes') as FormArray;
    this.roomTypePrices=this.contractFormGroup.get('roomTypePrices') as FormArray;
    this.supplementPrices=this.contractFormGroup.get('supplementPrices') as FormArray;
    this.markupPrices=this.contractFormGroup.get('markupPrices') as FormArray;
    this.discounts=this.contractFormGroup.get('discounts') as FormGroup;
  
  }

  //add
  
  addSeason() {
    this.seasons.push(this.createSeason());
  }

  addSupplement() {
    const supplement = this.createSupplements();
    this.supplements.push(supplement);
  }
  
  addRoomTypes() {
    this.roomTypes.push(this.createRoomTypes());
  }

  addRoomTypePrices() {
    this.roomTypePrices.push(this.createRoomTypePrices());
  }

  addSupplementPrices() {
    this.supplementPrices.push(this.createSupplementPrices());
  }

  addMarkupPrices() {
    this.markupPrices.push(this.createMarkupPrices());
  }

  addDiscount() {
    const discount = this.createDiscount();
    this.discounts.setValue(discount);
  }

 

  //remove

  removeSeason(index: number) {
    this.seasons.removeAt(index);
  }

  removeSupplement(index: number) {
    this.supplements.removeAt(index);
  }

  removeRoomTypes(index: number) {
    this.roomTypes.removeAt(index);
  }

  removeRoomTypePrices(index: number) {
    this.roomTypePrices.removeAt(index);
  }

  removeSupplementPrices(index: number) {
    this.supplementPrices.removeAt(index);
  }

  removeMarkupPrices(index: number) {
    this.markupPrices.removeAt(index);
  }

  removeDiscount() {
    this.discounts.reset(); // Reset the discounts FormGroup
  }


  //create

  createSeason(): FormGroup {
    return this._fb.group({
      seasonName: [''],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
    });
  }

  createSupplements(): FormGroup {
    return this._fb.group({
      supplementName: [''],
    });
  }

  createRoomTypes(): FormGroup {
    const form = this._fb.group({
      roomType: [''],
      noOfRooms: [0],
      maxAdults: [0]
    });
    console.log(form); // Log the form to the console
    return form;
  }
  

  createRoomTypePrices(): FormGroup {
    return this._fb.group({
      seasonName: [''],
      roomType: [''],
      price: [''],
      description:[''],
      imgUrl:['']
    });
  }

  createSupplementPrices(): FormGroup {
    return this._fb.group({
      seasonName: [''],
      supplementName: [''],
      price: ['']
    });
  }

  createMarkupPrices(): FormGroup {
    return this._fb.group({
      seasonName: [''],
      percentage: ['']
    });
  }

 

  createDiscount(): FormGroup {
    return this._fb.group({
      discountPercentage: [0.1],
      noOfDates: [0]
    });
  }

  //create Form

  createContractForm(): FormGroup {
    return this._fb.group({
      contractID: [0],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      termsAndConditions: [''],
      hotel: this._fb.group({
        hotelID: [0]
      }),
      seasons: this._fb.array([]),
      supplements: this._fb.array([]),
      supplementPrices: this._fb.array([]),
      markupPrices: this._fb.array([]),
      discounts: this.createDiscount(),
      roomTypes:this._fb.array([]),
      roomTypePrices: this._fb.array([]),
    });
  }

  onSubmit() {
    if (this.contractFormGroup.valid) {
      const formData = this.contractFormGroup.value as HotelContractDTO;

      this._hotelService.createHotelContract(formData).subscribe(
        (response) => {
          this._coreService.openSnackBar('Contract created successfully!', 'done'); // Snackbar notification
          console.log('Contract created successfully:', response);
          this._dialogRef.close();
        },
        (error) => {
          console.error('Error creating contract:', error);
          this._coreService.openSnackBar('Error creating contract', 'error'); // Snackbar notification for error
        }
      );
    } else {
      this.contractFormGroup.markAllAsTouched();
    }
  }
}
