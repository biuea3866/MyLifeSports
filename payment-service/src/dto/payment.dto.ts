import { IsNumber, IsString } from "class-validator"

export class PaymentDto {
    @IsString()
    paymentName: string;

    @IsString()
    payer: string;

    @IsString()
    rentalId: string;

    @IsString()
    paymentId: string;

    @IsNumber()
    price: number;

    @IsString()
    createdAt: string;                                  
}