export interface ReservationDTO{
    reservationID:number,
    bookingDate:Date,
    checkIn:Date,
    checkOut:Date,
    bookedRooms:number,
    roomPrice:number,
    finalPrice:number,
    supplementPriceWithNoOfDates:number,
    roomPriceWithNoOfDates:number,
    MarkupPrice:number,
    discountPrice:number,
    contract:number,
    seasonId:number
}