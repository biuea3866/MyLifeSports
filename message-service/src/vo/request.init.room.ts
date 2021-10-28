import { IsString } from "class-validator";

export class RequestInitRoom {
    @IsString()
    user_a: string;

    @IsString()
    user_b: string;
}