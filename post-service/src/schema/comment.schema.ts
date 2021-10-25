import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop({ required: true })
    postId: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    writer: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    createdAt: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);