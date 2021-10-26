import { IsArray, IsDate, IsString } from "class-validator";
import { Message } from "src/interfaces/message.interface";

export class RoomDto {
    @IsString()
    roomId: string;

    @IsArray()
    messages: Message[];

    @IsDate()
    createdAt: Date;
}