import { IsString } from "class-validator"

export class PaymentDto {
    @IsString()
    paymentName: string;

    @IsString()
    payer: string;

    @IsString()
    rentalId: string;

    @IsString()
    paymentId: string;

    @IsString()
    price: string;

    @IsString()
    createdAt: string;                                  
}