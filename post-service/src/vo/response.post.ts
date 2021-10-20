import { IsString } from "class-validator";

export class ResponsePost {
    @IsString()
    _id: string;

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

    @IsString()
    createdAt: string;

    rental: any;
}