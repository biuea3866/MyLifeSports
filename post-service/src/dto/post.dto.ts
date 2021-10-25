import { IsString } from "class-validator";

export class PostDto {
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

    comments: any;
}