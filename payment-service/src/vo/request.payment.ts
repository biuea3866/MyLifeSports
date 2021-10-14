import { IsNumber, IsString } from "class-validator";

export class RequestPayment {
    @IsString()
    readonly paymentName: string;
    
    @IsString()
    readonly rentalId: string;
    
    @IsString()
    readonly payer: string;
    
    @IsNumber()
    readonly price: number;
}