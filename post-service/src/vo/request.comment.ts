import { IsString } from "class-validator";

export class RequestComment {
    @IsString()
    postId: string;
    
    @IsString()
    userId: string;

    @IsString()
    writer: string;

    @IsString()
    content: string;
}