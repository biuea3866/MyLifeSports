import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";

export type RentalDocument = Rental & Document;

@Schema()
export class Rental {
    @Prop({ required: true })
    rentalId: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true})
    borrower: string;

    @Prop({ required: true })
    tel: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    date: string;

    @Prop({ required: true })
    time: string;

    @Prop({ required: true })
    mapId: string;

    @Prop({ required: true })
    mapName: string;

    @Prop({ required: true })
    status: string;   

    @Prop({ required: true })
    createdAt: string;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);