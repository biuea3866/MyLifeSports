import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "src/auth/auth.service";
import { statusConstants } from "src/constants/status.constant";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(readonly authService: AuthService) {
        super({
            usernameField: 'email'
        });
    }

    async validate(
        email: string,
        password: string,
    ): Promise<any> {
        const user = await this.authService.validateUser(email, password);

        if(!user) {
            return Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Not valid user"
            })
        }

        return user;
    }
}