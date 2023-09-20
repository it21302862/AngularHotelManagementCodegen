

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../services/hotels.service';
import { RoomType } from '../services/roomtypes';


@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css'],
})


export class RoomTypeComponent implements OnInit {
  public roomTypes: RoomType[] = [];
  selectedRoomType: RoomType | null = null; // Store the selected room type
  checkIn: string = '';
  checkOut: string = '';
  noOfPax: number = 1; // Default value for number of guests
  hotelName: string | null = null

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the hotelID from the route parameters
    this.route.params.subscribe((params) => {
      const hotelID = +params['hotelID']; // Convert the parameter to a number
      this.hotelName = this.route.snapshot.queryParams['hotelName'];
      console.log('Hotel Name:', this.hotelName);

      // Call the service to get available room types for the specified hotel
      this.hotelService.getAvailableRoomTypes(hotelID).subscribe(
        {
          next: (roomTypes: RoomType[]) => {
            this.roomTypes = roomTypes;
            console.log('Available Room Types:', this.roomTypes);
          },
          error: (err) => {
            console.error('Error fetching room types:', err);
          },
        }
      );
    });
  }


  selectRoomType(roomType: RoomType) {
    this.selectedRoomType = roomType;
  }

  bookRoomType(selectedRoomType: RoomType | null) {

    const formattedCheckIn = this.formatDate(this.checkIn);
    const formattedCheckOut = this.formatDate(this.checkOut);
    if (!selectedRoomType) {
      console.error('No room type selected.');
      return;
    }

    // Assuming you want to navigate to a booking page with parameters
    this.router.navigate(['/booking'], {
      queryParams: {
        contractId: selectedRoomType.contractID,
        roomTypeId: selectedRoomType.roomTypeID,
        checkIn: formattedCheckIn,
        checkOut: formattedCheckOut,
        noOfPax: this.noOfPax,
      },
    });
  }

  private formatDate(date: string): string {
    const formattedDate = new Date(date);
    return (
      formattedDate.getFullYear() +
      '-' +
      ('0' + (formattedDate.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + formattedDate.getDate()).slice(-2)
    );
  }
}


