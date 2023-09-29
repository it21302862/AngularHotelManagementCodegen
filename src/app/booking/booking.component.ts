import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Supplement } from '../services/supplement';
import { Reservation } from '../services/reservation';
import { HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {


  contractId: number | null = null;
  roomTypeId: number | null = null;
  checkIn: string | null = null;
  checkOut: string | null = null;
  noOfPax: number | null = null;
  roomPrice: number | null = null;
  error: string | null = null;
  reservationId:string | null=null;
  supplements: Supplement[] = [];
  reservation: Reservation | null = null;
  finalPrice: number | null = null; 
  supplementPriceWithNoOfDates: number | null= null;
  roomPriceWithNoOfDates: number | null = null;
  MarkupPrice: number | null= null;
  discountPrice: number | null= null;



  constructor(private route: ActivatedRoute, private http: HttpClient,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.contractId = +params['contractId']|| null;
      this.roomTypeId = +params['roomTypeId'] || null;
      this.checkIn = params['checkIn'] || null;
      this.checkOut = params['checkOut'] || null;
      this.noOfPax = +params['noOfPax'] || null;
      console.log(this.contractId);
      if (
        this.contractId !== null &&
        this.roomTypeId !== null &&
        this.checkIn !== null &&
        this.checkOut !== null &&
        this.noOfPax !== null
      ) {
        // this.calculatePrice();
        this.calculatePrice(() => {
          this.displayFinalPrice();
        });
      } else {
        this.error = 'Invalid query parameters.';
        
      }
    });

   
  }

  calculatePrice(callback: () => void) {
    console.log('cal runs');
    const requestPayload = {
      contractId: this.contractId,
      roomTypeId: this.roomTypeId,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      noOfPax: this.noOfPax,
    };
    
    const url = `http://localhost:9090/api/v1/hotels/calculate-price?contractId=${requestPayload.contractId}&roomTypeId=${requestPayload.roomTypeId}&checkIn=${requestPayload.checkIn}&checkOut=${requestPayload.checkOut}&noOfPax=${requestPayload.noOfPax}`;
    
    this.http.post<any>(url, 0).subscribe(
      (response: any) => {
        if (response.error) {
          // this.error = response.error; // Display the error message
          this.snackBar.open(response.error, 'Close', {
            duration: 7000, // Duration in milliseconds
          });
          this.error = response.error;
      }else{
        this.roomPrice = response?.roomPrice ?? null;
        this.reservationId = response?.reservationId ?? null;
        console.log('Room Price:', this.roomPrice);
        console.log('Reservation ID:', this.reservationId); 
        if (this.reservationId) {
          // this.fetchSupplements();
          this.fetchSupplements(() => {
            // Callback for fetchSupplements
            callback(); // Call the callback here to execute displayFinalPrice
          });
        }
      }
      },
      (error: HttpErrorResponse) => {
        this.error =
          'Error calculating price: ' + (error.message || 'Unknown error');
        console.error('Error calculating price:', error);
      }
    );
    
  }

  fetchSupplements(callback: () => void) {
    if (this.reservationId) {
      const url = `http://localhost:9090/api/v1/hotels/${this.reservationId}/supplements`;

      this.http.get<Supplement[]>(url).subscribe(
        (response: Supplement[]) => {
          this.supplements = response;
          console.log('Supplements:', this.supplements);
          this.displayFinalPrice();
        
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching supplements:', error);
        }
      );
    }
  }


  onSupplementCheckboxChange(supplement: Supplement) {
    if (this.reservationId) {
      const supplementId = supplement.supplementID;
      const url = `http://localhost:9090/api/v1/hotels/${this.reservationId}/add-supplement`;
  

      const supplementIDs = [supplementId];
  

      const params = new HttpParams().set('supplementIDs', supplementIDs.join(','));
  
      this.http.post<any>(url, null, { params }).subscribe(
        (response: any) => {
          console.log('Supplement added to reservation:', response);
          this.displayFinalPrice();
        },
        (error: HttpErrorResponse) => {
          console.error('Error adding supplement to reservation:', error);
        }
      );
    }
   
  }

  

  displayFinalPrice() {
    if (this.reservationId) {
      const url = `http://localhost:9090/api/v1/hotels/calculateFinalPrice/${this.reservationId}`;

  
      this.http.get<any>(url).subscribe(
        (response: any) => {
          const roomPriceWithNoOfDates = response?.roomPriceWithNoOfDates ?? null;
          const supplementPriceWithNoOfDates = response?.supplementPriceWithNoOfDates ?? null;
          const MarkupPrice = response?.MarkupPrice ?? null;
          const discountPrice=response?.discountPrice ?? null;
          const finalPrice = response?.finalPrice ?? null;
          
          console.log('Final Price:', finalPrice);
          console.log('Final Supplement Price:', supplementPriceWithNoOfDates);
          console.log('Final Room Price:', roomPriceWithNoOfDates);
          console.log('Markup Price:', MarkupPrice);
          console.log('Discount Price:',discountPrice);
  
          // Display the final price to the customer
          this.finalPrice = finalPrice;
          this.MarkupPrice=MarkupPrice;
          this.discountPrice=discountPrice;
          this.roomPriceWithNoOfDates=roomPriceWithNoOfDates;
          this.supplementPriceWithNoOfDates=supplementPriceWithNoOfDates;
        },
        (error: HttpErrorResponse) => {
          console.error('Error calculating final price:', error);
        }
      );
    }
  }

 
  

  
  
  
}
