import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";

export type MapsDocument = Maps & Document;

@Schema()
export class Maps {
    @Transform(({ value }) => value.toString())
    _id: String;
    
    @Prop({ required: true })
    ycode: Number;

    @Prop({ required: true })
    type_nm: string;

    @Prop({ required: true })
    gu_nm: string;

    @Prop({ required: true })
    parking_lot: string;

    @Prop({ required: true })
    bigo: string;

    @Prop({ required: true })
    xcode: Number;

    @Prop({ required: true })
    tel: string;
    
    @Prop({ required: true })
    addr: string;

    @Prop({ required: true })
    in_out: string;

    @Prop({ required: true })
    home_page: string;

    @Prop({ required: true })
    edu_yn: string;

    @Prop({ required: true })
    nm: string;
}

export const MapsSchema = SchemaFactory.createForClass(Maps);