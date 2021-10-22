import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Builder } from 'builder-pattern';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constants';
import { PostDto } from 'src/dto/post.dto';
import { Post, PostDocument } from 'src/schema/post.schema';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

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
                dtos.push(entity);
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
            const entity: any = await this.postModel.findOne({ _id: _id });

            if(!entity) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist post data"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(PostDto)._id(String(entity._id))
                                         .title(entity.title)
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
                dtos.push(entity);
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
                dtos.push(entity);
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
                dtos.push(entity);
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
}
