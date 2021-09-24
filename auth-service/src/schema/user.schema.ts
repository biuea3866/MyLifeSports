import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    email: string;
    
    @Prop({ required: true })
    nickname: string;
    
    @Prop({ required: true })
    userId: string;
    
    @Prop({ required: true })
    phoneNumber: string;
    
    @Prop({ required: true })
    encryptedPwd: string;

    @Prop({ required: true })
    createdAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);