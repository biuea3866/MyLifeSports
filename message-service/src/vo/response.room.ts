import { IsArray, IsDate, IsString } from "class-validator";
import { Message } from "src/interfaces/message.interface";

export class ResponseRoom {
    @IsString()
    roomId: string;

    @IsArray()
    users: string[];
    
    @IsArray()
    messages: Message[];

    @IsDate()
    createdAt: Date;
}