import { IsString } from "class-validator";

export class RequestCheckRoom {
    @IsString()
    user_a: string;

    @IsString()
    user_b: string;
}