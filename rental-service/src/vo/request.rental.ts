import { IsNumber, IsString } from "class-validator";

export class RequestRental {
    @IsNumber()
    price: number;

    @IsString()
    borrower: string;

    @IsString()
    tel: string;

    @IsString()
    userId: string;

    @IsString()
    date: string;

    @IsString()
    time: string;

    @IsString()
    mapId: string;

    @IsString()
    mapName: string;                          
}