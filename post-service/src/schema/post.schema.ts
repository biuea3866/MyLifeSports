import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop({ type: SchemaTypes.ObjectId, ref: Post.name})
    _id: Types.ObjectId;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true})
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    writer: string;

    @Prop({ required: true })
    createdAt: string;

    @Prop()
    rental: any;
}

export const PostSchema = SchemaFactory.createForClass(Post);