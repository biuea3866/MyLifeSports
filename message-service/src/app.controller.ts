import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { Builder } from "builder-pattern";
import { statusConstants } from "./constants/status.constants";
import { MessageDto } from "./dto/message.dto";
import { RoomDto } from "./dto/room.dto";
import { MessageService } from "./message/message.service";
import { RequestMessage } from "./vo/request.message";
import { ResponseRoom } from "./vo/response.room";

@Controller("message-service")
export class AppController{
    constructor(private readonly messageService: MessageService) {}

    @Post('create')
    public async create(@Body() requestMessage: RequestMessage): Promise<any> {
        try {
            const dto: any = await this.messageService.create(Builder(MessageDto).roomId(requestMessage.roomId)
                                                                                     .sender(requestMessage.sender)
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
                payload: Builder(ResponseRoom).roomId(String(dto.payload.roomId))
                                              .messages(dto.payload.messages)
                                              .build(),
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

    @Get(':roomId')
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
                payload: Builder(ResponseRoom).roomId(String(dto.payload.roomId))
                                              .messages(dto.payload.messages)
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

    @Delete(':messageId/message')
    public async deleteMessage(@Param('messageId') messageId: string): Promise<any> {
        try {
            const result: any = await this.messageService.deleteMessage(messageId);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message,
                });
            }

            return await Object.assign({
                status: HttpStatus.NO_CONTENT,
                payload: statusConstants.SUCCESS,
                message: "delete message",
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
}