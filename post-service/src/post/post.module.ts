import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from 'src/schema/comment.schema';
import { Post, PostSchema } from 'src/schema/post.schema';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Post.name,
      schema: PostSchema,
    }]),
    MongooseModule.forFeature([{
      name: Comment.name,
      schema: CommentSchema
    }]),
  ],
  providers: [PostService],
  exports: [PostService]
})
export class PostModule {}
