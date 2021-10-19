import { IsJSON, IsNumber, IsObject, IsString } from "class-validator";

export class ResponseRental {
    @IsString()
    rentalId: string;

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

    @IsString()
    status: string;     
    
    @IsString()
    createdAt: string;

    @IsJSON()
    payment: any;
}