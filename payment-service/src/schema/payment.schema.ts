import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
    @Prop({ required: true })
    paymentName: string;

    @Prop({ required: true })
    payer: string;

    @Prop({ required: true })
    rentalId: string;

    @Prop({ required: true })
    paymentId: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    createdAt: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);