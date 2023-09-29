import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hotel } from '../services/hotel';
import { HotelService } from '../services/hotels.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-display-hotels',
  templateUrl: './home-display-hotels.component.html',
  styleUrls: ['./home-display-hotels.component.css'],
})
export class HomeDisplayHotelsComponent implements OnInit {
  @ViewChild('locationInput', { static: true }) locationInput!: MatInput;
  @ViewChild('hotelNameInput', { static: true }) hotelNameInput!: MatInput;

  public hotels: Hotel[] = [];

  public readonly THUMBUP_ICON =
    `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
    `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
    `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

  constructor(
    private hotelService: HotelService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    iconRegistry.addSvgIconLiteral(
      'thumbs-up',
      sanitizer.bypassSecurityTrustHtml(this.THUMBUP_ICON)
    );
  }

  ngOnInit(): void {
    this.getHotels();
  }

  public getHotels(): void {
    this.hotelService.getHotels().subscribe(
      (response: any) => {
        if (response && response.content) {
          this.hotels = response.content;
          console.log(this.hotels);
        } else {
          console.error('Invalid API response:', response);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSearchInput(): void {
    this.searchHotels(this.hotelNameInput.value, this.locationInput.value);
  }

  public searchHotels(hotelName: string, location: string): void {
    if (!hotelName && !location) {
      this.getHotels();
    } else {
      const results: Hotel[] = [];
      const key = hotelName.toLowerCase();
      const locationKey = location.toLowerCase();

      for (const hotel of this.hotels) {
        const hotelNameLower = hotel.hotelName.toLowerCase();
        const locationLower = hotel.location.toLowerCase();

        if (
          hotelNameLower.includes(key) &&
          locationLower.includes(locationKey) &&
          key.length > 0 &&
          locationKey.length > 0
        ) {
          results.push(hotel);
        }
      }

      if (results.length === 0 || (!hotelName && !location)) {
        this.snackBar.open('No results found', 'Dismiss', {
          duration: 3000, // 3 seconds
          verticalPosition: 'top', // Position at the top of the screen
        });
      } else {
        this.hotels = results;
      }
    }
  }

  viewRoomTypes(hotelID: number, hotelName: string) {
    this.router.navigate(['/room-types', hotelID], {
      queryParams: {
        hotelName: hotelName,
      },
    });
  }
}
