import { Hotel } from "./hotel";
import { SeasonDTO } from './SeasonDTO';
import { Supplement } from "./supplement";
import { SupplementPriceDTO } from "./SupplementPriceDTO";
import { MarkupDTO } from "./MarkupDTO";
import { DiscountDTO } from "./DiscountDTO";
import { RoomTypeDTO } from "./RoomTypeDTO";
import { RoomTypePriceDTO } from "./RoomTypePriceDTO";

export interface HotelContractDTO {
    contractID: number;
    hotelID: number;
    startDate: Date;
    endDate: Date;
    termsAndConditions: string;
    hotel: Hotel; 
    seasons: SeasonDTO[];
    supplements: Supplement[];
    supplementPrices: SupplementPriceDTO[];
    markupPrices: MarkupDTO[];
    discounts: DiscountDTO;
    roomTypes: RoomTypeDTO[];
    roomTypePrices: RoomTypePriceDTO[];
  }