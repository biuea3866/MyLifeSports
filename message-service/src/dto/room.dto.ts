import { IsDate, IsString } from "class-validator";

export class RoomDto {
    @IsString()
    roomId: string;

    @IsString()
    sender: string;

    @IsString()
    receiver: string;

    @IsString()
    content: string;

    @IsDate()
    createdAt: Date;
}