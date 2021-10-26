import { IsString } from "class-validator";

export class RequestMessage {
    @IsString()
    sender: string;

    @IsString()
    receiver: string;

    @IsString()
    content: string;
}