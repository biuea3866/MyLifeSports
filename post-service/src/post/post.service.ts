import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDto } from 'src/dto/post.dto';
import { Post, PostDocument } from 'src/schema/post.schema';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

    public async write(dto: PostDto): Promise<any> {}

    public async getAll(): Promise<any> {}

    public async getOne(_id: string): Promise<any> {}

    public async getPostsByType(type: string): Promise<any> {}

    public async getPostsByUserId(userId: string): Promise<any> {}

    public async getPostsByKeyword(keyword: string): Promise<any> {}

    public async deletePost(_id: string): Promise<any> {}
}
