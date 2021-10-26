import { IsDate, IsString } from "class-validator";

export class MessageDto {
    @IsString()
    roomId: string;

    @IsString()
    messageId: string;
    
    @IsString()
    sender: string;

    @IsString()
    receiver: string;

    @IsString()
    content: string;

    @IsDate()
    createdAt: Date;
}