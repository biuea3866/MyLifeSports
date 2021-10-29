import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { Builder } from "builder-pattern";
import { statusConstants } from "./constants/status.constants";
import { MessageDto } from "./dto/message.dto";
import { RoomDto } from "./dto/room.dto";
import { MessageService } from "./message/message.service";
import { RequestInitRoom } from "./vo/request.init.room";
import { RequestMessage } from "./vo/request.message";
import { ResponseRoom } from "./vo/response.room";

@Controller("message-service")
export class AppController{
    constructor(private readonly messageService: MessageService) {}

    @Post('room/init-room')
    public async initRoom(@Body() vo: RequestInitRoom): Promise<any> {
        try {
            if(!vo.user_a || !vo.user_b) {
                return await Object.assign({
                    status: HttpStatus.BAD_REQUEST,
                    payload: null,
                    message: "vo is null"
                });
            }

            const users: string[] = [];

            users.push(vo.user_a);
            users.push(vo.user_b);
            
            const dto: any = await this.messageService.initRoom(Builder(RoomDto).users(users)
                                                                                .build());
            
            if(dto.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dto.message
                });
            }

            if(!dto.payload) {
                return await Object.assign({
                    status: HttpStatus.NO_CONTENT,
                    payload: null,
                    message: dto.message
                });
            }

            return await Object.assign({
                status: HttpStatus.CREATED,
                payload: dto.payload.roomId,
                message: "Successful make room",
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Post('message')
    public async create(@Body() requestMessage: RequestMessage): Promise<any> {
        try {
            const dto: any = await this.messageService.create(Builder(MessageDto).sender(requestMessage.sender)
                                                                                 .receiver(requestMessage.receiver)
                                                                                 .content(requestMessage.content)
                                                                                 .build());
            
            if(dto.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dto.message
                });
            }

            return await Object.assign({
                status: HttpStatus.CREATED,
                payload: true,
                message: "Successfully create message"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get(':roomId/room')
    public async getRoom(@Param('roomId') roomId: string): Promise<any> {
        try {
            const dto: any = await this.messageService.getRoom(roomId);

            if(dto.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dto.message
                });
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: Builder(ResponseRoom).roomId(dto.payload.roomId)
                                              .users(dto.payload.users)
                                              .messages(dto.payload.messages)
                                              .createdAt(dto.payload.createdAt)
                                              .build(),
                message: "Get room data"                        
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get(':nickname/rooms')
    public async getRooms(@Param('nickname') nickname: string): Promise<any> {
        try {
            const dtos: any = await this.messageService.getRooms(nickname);
            
            if(dtos.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dtos.message
                });
            }

            const responseRooms: Array<ResponseRoom> = [];

            for(const dto of dtos.payload) {
                responseRooms.push(Builder(ResponseRoom).roomId(dto.roomId)
                                                        .users(dto.users)
                                                        .messages(dto.messages)
                                                        .createdAt(dto.createdAt)
                                                        .build());
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responseRooms,
                message: "Successfully get rooms data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get(':keyword/keyword/rooms')
    public async getRoomsByKeyword(@Param('keyword') keyword: string): Promise<any> {
        try {
            const dtos: any = await this.messageService.getRoomsByKeyword(keyword);

            if(dtos.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + dtos.message
                });
            }

            const responseRooms: Array<ResponseRoom> = [];

            for(const dto of dtos.payload) {
                responseRooms.push(Builder(ResponseRoom).roomId(dto.roomId)
                                                        .users(dto.users)
                                                        .messages(dto.messages)
                                                        .createdAt(dto.createdAt)
                                                        .build());
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responseRooms,
                message: "Successfully get rooms data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Delete(':roomId/room')
    public async deleteRoom(@Param('roomId') roomId: string): Promise<any> {
        try {
            const result: any = await this.messageService.deleteRoom(roomId);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            return await Object.assign({
                status: HttpStatus.NO_CONTENT,
                payload: statusConstants.SUCCESS,
                message: "Delete room"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get('room/check') 
    public async checkRoom(@Query() query): Promise<any> {
        try {
            const result: any = await this.messageService.checkRoom(
                query.user_a,
                query.user_b
            );
            
            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: result.payload,
                message: result.message
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }
}