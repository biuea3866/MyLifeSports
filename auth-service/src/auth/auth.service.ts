import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Builder } from 'builder-pattern';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constant';
import { UserDto } from 'src/dto/user.dto';
import { User, UserDocument } from 'src/schema/user.schema';
import { isHashValid } from 'src/util/util.hash';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        readonly jwtService: JwtService    
    ) {}
    
    public async loadByEmail(email: string): Promise<any> {
        return await this.userModel.findOne({ email: email });
    }

    public async validateUser(
        email: string, 
        password: string
    ): Promise<any> {
        const user = await this.loadByEmail(email);

        if(user && await isHashValid(password, user.encryptedPwd)) { 
            return user;
        }

        return null;
    }

    public async login(userDto: UserDto): Promise<any> {
        try {
            const payloadForSign = {
                email: userDto.email 
            };

            const user = await this.userModel.findOne({ email: userDto.email });

            if(!user) {
                return Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Not found user"
                });
            }

            return Object.assign({
                status: statusConstants.SUCCESS,
                access_token: this.jwtService.sign(payloadForSign),
                payload: Builder(UserDto).email(user.email)
                                         .nickname(user.nickname)
                                         .phoneNumber(user.phoneNumber)
                                         .createdAt(user.createdAt)
                                         .userId(user.userId)
                                         .build(),
                message: "Successfully Login"
            });
        } catch(err) {
            console.log(err);

            return Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: err
            });
        }
    }
}
