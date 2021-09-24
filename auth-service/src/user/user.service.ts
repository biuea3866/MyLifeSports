import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/user.dto';
import { statusConstants } from 'src/constants/status.constant';
import { Builder } from 'builder-pattern';
import { v4 as uuid } from 'uuid';
import { hash } from 'src/util/util.hash';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    public async register(userDto: UserDto): Promise<any> {
        const user = new this.userModel(Builder(User).email(userDto.email)
                                                     .encryptedPwd(await hash(userDto.password))
                                                     .nickname(userDto.nickname)
                                                     .phoneNumber(userDto.phoneNumber)
                                                     .userId(uuid())
                                                     .createdAt(new Date().toDateString())
                                                     .build());

        try {
            const result = await user.save();
            
            return Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Successfully save in database"
            });
        } catch(err) {
            return Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: err
            });
        } 
    }

    public async getUser(userId: string): Promise<any> {
        try {
            const user = await this.userModel.findOne({ userId: userId });
            
            return Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(UserDto).email(user.email)
                                         .nickname(user.nickname)
                                         .phoneNumber(user.phoneNumber)
                                         .createdAt(user.createdAt)
                                         .userId(user.userId)
                                         .build(),
                message: "Successfully Login"
            });
        } catch(err) {
            return Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: err
            });
        }
    }
}
