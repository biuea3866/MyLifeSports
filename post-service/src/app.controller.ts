import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { Builder } from "builder-pattern";
import { statusConstants } from "./constants/status.constants";
import { PostDto } from "./dto/post.dto";
import { PostService } from "./post/post.service";
import { RequestPost } from "./vo/request.post";
import { ResponsePost } from "./vo/response.post";

@Controller('post-service')
export class AppController {
    constructor(private readonly postService: PostService) {}

    @Post('/')
    public async write(@Body() vo: RequestPost): Promise<any> {
        try {
            const dto: any = this.postService.write(Builder(PostDto).type(vo.type)
                                                                    .title(vo.title)
                                                                    .content(vo.content)
                                                                    .userId(vo.userId)
                                                                    .writer(vo.writer)
                                                                    .rental(vo.rental ? vo.rental : null)
                                                                    .build());

            if(dto.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dto.message,
                });
            }

            return await Object.assign({
                status: HttpStatus.CREATED,
                payload: Builder(ResponsePost)._id(dto.payload._id)
                                              .type(dto.payload.type)
                                              .title(dto.payload.title)
                                              .content(dto.payload.content)
                                              .userId(dto.payload.userId)
                                              .writer(dto.payload.writer)
                                              .createdAt(dto.payload.createdAt)
                                              .rental(dto.payload.rental)
                                              .build(),
                message: "Get post data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get('/')
    public async getAll(): Promise<any> {
        try {
            const dtos: any = this.postService.getAll();

            if(dtos.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dtos.message,
                });
            }

            const responsePosts: Array<ResponsePost> = [];

            for(const post of dtos) {
                responsePosts.push(post);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responsePosts,
                message: "Get posts data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get('posts/type/:type')
    public async getPostsByType(@Param('type') type: string): Promise<any> {
        try {
            const dtos: any = this.postService.getPostsByType(type);

            if(dtos.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dtos.message,
                });
            }

            const responsePosts: Array<ResponsePost> = [];

            for(const post of dtos) {
                responsePosts.push(post);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responsePosts,
                message: "Get posts data",    
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err,
            });
        }
    }

    @Get(':_id/post')
    public async getOne(@Param('_id') _id: string): Promise<any> {
        try {
            const dto: any = this.postService.getOne(_id);

            if(dto.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dto.message,
                });
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: Builder(ResponsePost)._id(dto.payload._id)
                                              .type(dto.payload.type)
                                              .title(dto.payload.title)
                                              .content(dto.payload.content)
                                              .userId(dto.payload.userId)
                                              .writer(dto.payload.writer)
                                              .createdAt(dto.payload.createdAt)
                                              .rental(dto.payload.rental)
                                              .build(),
                message: "Get post data",
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get(':userId/posts')
    public async getPostsByUserId(@Param('userId') userId: string): Promise<any> {
        try {
            const dtos: any = this.postService.getPostsByUserId(userId);

            if(dtos.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dtos.message,
                });
            }

            const responsePosts: Array<ResponsePost> = [];

            for(const post of dtos) {
                responsePosts.push(post);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responsePosts,
                message: "Get posts data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err,
            });
        }
    }

    @Get('posts/keyword/:keyword')
    public async getPostsByKeyword(@Param('keyword') keyword: string): Promise<any> {
        try {
            const dtos: any = this.postService.getPostsByKeyword(keyword);

            if(dtos.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dtos.message,
                });
            }

            const responsePosts: Array<ResponsePost> = [];

            for(const post of dtos) {
                responsePosts.push(post);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responsePosts,
                message: "Get posts data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Delete(':_id/post')
    public async deletePost(@Param('_id') _id: string): Promise<any> {
        try {    
            const result: any = this.postService.deletePost(_id);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message,
                });
            }

            return await Object.assign({
                status: HttpStatus.NO_CONTENT,
                payload: null,
                message: "Delete post"
            })
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        } 
    }
}