import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';
import { RoomType } from './roomtypes';
import { environment } from '../environments/environment';
import { HotelContractDTO } from './HotelContractDTO ';
import { SeasonDTO } from './SeasonDTO';

import {HttpHeaders } from '@angular/common/http';
import { SupplementDTO } from './SupplementDTO';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiServerUrl}/api/v1/hotels/hotels`);
  }


  public addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.apiServerUrl}/api/v1/hotels/hotel`, hotel);
  }

  public updateHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.apiServerUrl}/api/v1/hotels/updateHotel`, hotel);
  }

  public deleteHotel(hotelID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/hotels/deleteHotel/${hotelID}`);
  }

  public getAvailableRoomTypes(hotelID: number):Observable<RoomType[]> {
    const url = `/api/v1/hotels/hotel/${hotelID}/available-room-types`; // Replace with your actual API endpoint URL
    return this.http.get<RoomType[]>(`${this.apiServerUrl}${url}`);
  }
  
  public getAllContracts(): Observable<HotelContractDTO[]> {
    return this.http.get<HotelContractDTO[]>(`${this.apiServerUrl}/api/v1/hotels/contracts`);
  }

  // public createHotelContract(hotelContractDTO: HotelContractDTO): Observable<string> {
  //   return this.http.post<string>(`${this.apiServerUrl}/api/v1/hotels/contract`, hotelContractDTO, this.httpOptions);
  // }
  public createHotelContract(hotelContractDTO: HotelContractDTO): Observable<string> {
  return this.http.post(`${this.apiServerUrl}/api/v1/hotels/contract`, hotelContractDTO, {
    ...this.httpOptions,
    responseType: 'text' // Expect a plain text response
  });
  }

  public getAllSeasons(): Observable<SeasonDTO[]> {
    return this.http.get<SeasonDTO[]>(`${this.apiServerUrl}/api/v1/hotels/seasons`);
  }

  public getAllSupplements(): Observable<SupplementDTO[]> {
    return this.http.get<SupplementDTO[]>(`${this.apiServerUrl}/api/v1/hotels/supplements`);
  }






  
  

}

