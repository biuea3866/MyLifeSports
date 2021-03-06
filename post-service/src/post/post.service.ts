import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Builder } from 'builder-pattern';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constants';
import { CommentDto } from 'src/dto/comment.dto';
import { PostDto } from 'src/dto/post.dto';
import { Comment, CommentDocument } from 'src/schema/comment.schema';
import { Post, PostDocument } from 'src/schema/post.schema';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
    ) {}

    public async write(dto: PostDto): Promise<any> {
        try {
            const entity: any = await new this.postModel(Builder(Post).type(dto.type)
                                                                      .title(dto.title)
                                                                      .content(dto.content)
                                                                      .userId(dto.userId)
                                                                      .writer(dto.writer)
                                                                      .createdAt(new Date().toString())
                                                                      .rental(dto.rental ? dto.rental : null)
                                                                      .build())
                                                                      .save();
            
            if(!entity) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "post-service: Database error!"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(PostDto).title(entity.title)
                                         .content(entity.content)
                                         .type(entity.type)
                                         .userId(entity.userId)
                                         .writer(entity.writer)
                                         .createdAt(entity.createdAt)
                                         .rental(entity.rental)
                                         .build(),
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: null,
                message: "post-service: " + err,
            });
        }
    }

    public async getAll(): Promise<any> {
        try {
            const entities: any = await this.postModel.find();

            if(!entities) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist posts data"
                });
            }

            const dtos: Array<PostDto> = [];

            for(const entity of entities) {
                dtos.push(Builder(PostDto)._id(entity._id)
                                          .title(entity.title)
                                          .content(entity.content)
                                          .type(entity.type)
                                          .userId(entity.userId)
                                          .writer(entity.writer)
                                          .createdAt(entity.createdAt)
                                          .rental(entity.rental)
                                          .comments(await this.commentModel.find({ postId: entity._id }))
                                          .build());
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: dtos,
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err
            });
        }
    }

    public async getOne(_id: string): Promise<any> {
        try {    
            const post: any = await this.postModel.findOne({ _id: _id });
            const comments: any = await this.commentModel.find({ postId: post._id });

            if(!post) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist post data"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(PostDto)._id(String(post._id))
                                         .title(post.title)
                                         .content(post.content)
                                         .type(post.type)
                                         .userId(post.userId)
                                         .writer(post.writer)
                                         .createdAt(post.createdAt)
                                         .rental(post.rental)
                                         .comments(comments)
                                         .build(),
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err,
            });
        }
    }

    public async getPostsByType(type: string): Promise<any> {
        try {    
            const entities: any = await this.postModel.find({ type: type });

            if(!entities) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist post data"
                });
            }

            const dtos: Array<PostDto> = [];

            for(const entity of entities) {
                dtos.push(Builder(PostDto)._id(entity._id)
                                          .title(entity.title)
                                          .content(entity.content)
                                          .type(entity.type)
                                          .userId(entity.userId)
                                          .writer(entity.writer)
                                          .createdAt(entity.createdAt)
                                          .rental(entity.rental)
                                          .comments(await this.commentModel.find({ postId: entity._id }))
                                          .build());
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: dtos,
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err
            });
        }
    }

    public async getPostsByUserId(userId: string): Promise<any> {
        try {
            const entities: any = await this.postModel.find({ userId: userId });

            if(!entities) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist post data"
                });
            }

            const dtos: Array<PostDto> = [];

            for(const entity of entities) {
                dtos.push(Builder(PostDto)._id(entity._id)
                                          .title(entity.title)
                                          .content(entity.content)
                                          .type(entity.type)
                                          .userId(entity.userId)
                                          .writer(entity.writer)
                                          .createdAt(entity.createdAt)
                                          .rental(entity.rental)
                                          .comments(await this.commentModel.find({ postId: entity._id }))
                                          .build());
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: dtos,
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err,
            });
        }
    }

    public async getPostsByKeyword(keyword: string): Promise<any> {
        try {
            const entities: any = await this.postModel.aggregate([{ 
                $group: {
                    $or: [
                        { title: { $regex: '.*' + keyword + '.*' }},
                        { content: { $regex: '.*' + keyword + '.*' }}
                    ]
                }
            }]);

            if(!entities) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist post data"
                });
            }

            const dtos: Array<PostDto> = [];

            for(const entity of entities) {
                dtos.push(Builder(PostDto)._id(entity._id)
                                          .title(entity.title)
                                          .content(entity.content)
                                          .type(entity.type)
                                          .userId(entity.userId)
                                          .writer(entity.writer)
                                          .createdAt(entity.createdAt)
                                          .rental(entity.rental)
                                          .comments(await this.commentModel.find({ postId: entity._id }))
                                          .build());
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: dtos,
                message: "Successful transaction"  
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err,
            });
        }
    }

    public async deletePost(_id: string): Promise<any> {
        try {    
            const result: any = await this.postModel.deleteOne({ _id: _id });
            await this.commentModel.deleteMany({ postId: _id });

            if(!result) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Not exist post data"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: null,
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err,
            });
        }
    } 

    public async comment(dto: CommentDto): Promise<any> {
        try {
            const entity: any = await new this.commentModel(Builder(Comment).postId(dto.postId)
                                                                            .userId(dto.userId)
                                                                            .writer(dto.writer)
                                                                            .content(dto.content)
                                                                            .createdAt(new Date().toString())
                                                                            .build())
                                                                            .save();
            
            if(!entity) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "post-service: database error"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: null,
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err,
            })
        }
    }

    public async deleteComment(_id: string): Promise<any> {
        try {
            const result: any = await this.commentModel.deleteOne({ _id: _id });

            if(!result) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "post-service: database error"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: null,
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "post-service: " + err
            });
        }
    }
}
