import { IsDate, IsString } from "class-validator";

export class UserDto {
    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    nickname: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    userId: string;

    @IsString()
    createdAt: string;
}