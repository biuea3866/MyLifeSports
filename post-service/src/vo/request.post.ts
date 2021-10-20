import { IsString } from "class-validator";

export class RequestPost {
    @IsString()
    type: string;

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    userId: string;

    @IsString()
    writer: string;

    rental: any;
}