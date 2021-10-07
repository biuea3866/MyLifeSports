import { IsNumber, IsString } from "class-validator";

export class MapsDto {
    @IsString()
    _id: string;
    
    @IsNumber()
    ycode: Number;

    @IsString()
    type_nm: string;

    @IsString()
    gu_nm: string;

    @IsString()
    parking_lot: string;

    @IsString()
    bigo: string;

    @IsNumber()
    xcode: Number;

    @IsString()
    tel: string;
    
    @IsString()
    addr: string;

    @IsString()
    in_out: string;

    @IsString()
    home_page: string;

    @IsString()
    edu_yn: string;

    @IsString()
    nm: string;
}