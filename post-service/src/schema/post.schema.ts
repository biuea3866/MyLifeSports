import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Comment } from "src/interfaces/comment.interface";
import { Rental } from "src/interfaces/rental.interface";

export type PostDocument = Post & Document;

@Schema()
export class Post {
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

    @Prop({ required: false })
    rental: Rental;

    @Prop({ required: false })
    comments: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);