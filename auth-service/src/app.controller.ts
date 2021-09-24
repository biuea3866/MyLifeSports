import { Body, Controller, Get, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { Builder } from "builder-pattern";
import { AuthService } from "./auth/auth.service";
import { statusConstants } from "./constants/status.constant";
import { UserDto } from "./dto/user.dto";
import { JwtAuthGuard } from "./guard/jwt-auth.guard";
import { LocalAuthGuard } from "./guard/local-auth.guard";
import { UserService } from "./user/user.service";
import { RequestLogin } from "./vo/request.login";
import { RequestRegister } from "./vo/request.register";
import { ResponseUser } from "./vo/response.user";

@Controller('auth-service')
export class AppController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,    
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('status')
    public async status(): Promise<string> {
        return "auth-service is working successfully";
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Body() requestLogin: RequestLogin): Promise<any> {
        try {
            const result = await this.authService.login(Builder(UserDto).email(requestLogin.email)
                                                                        .build());
            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Error message: " + result.message,
                });
            }
            
            return await Object.assign({
                status: HttpStatus.OK,
                token: result.access_token,
                payload: Builder(ResponseUser).email(result.payload.email)
                                              .nickname(result.payload.nickname)
                                              .phoneNumber(result.payload.phoneNumber)
                                              .userId(result.payload.userId)
                                              .build(),
                message: 'Successfully Login'
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Post('register')
    public async register(@Body() requestRegister: RequestRegister): Promise<any> {
        try {
            const result: any = await this.userService.register(Builder(UserDto).email(requestRegister.email)
                                                                                .password(requestRegister.password)
                                                                                .nickname(requestRegister.nickname)
                                                                                .phoneNumber(requestRegister.phoneNumber)
                                                                                .build());
            
            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Error message: " + result.message,
                });
            }
                            
            return await Object.assign({
                status: HttpStatus.CREATED,
                payload: result.payload,
                message: "Successfully register"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Error message: " + err,
            });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get(':userId')
    public async getUser(@Param('userId') userId: string): Promise<any> {
        try {
            const result: any = await this.userService.getUser(userId);
    
            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Error message: " + result.message,
                });
            }

            return await Object.assign({
                        status: HttpStatus.OK,
                        payload: Builder(ResponseUser).email(result.payload.email)
                                                      .nickname(result.payload.nickname)
                                                      .phoneNumber(result.payload.phoneNumber)
                                                      .userId(result.payload.userId)
                                                      .build(),
                        message: "Get User Information",
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Error message: " + err,
            });
        }
    }
}