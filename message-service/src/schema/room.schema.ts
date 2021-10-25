import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Message } from "src/interfaces/message.interface";

export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Prop({ required: true })
    messages: Message[];
    
    @Prop({ required: true })
    createdAt: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);