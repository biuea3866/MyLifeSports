import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Builder } from 'builder-pattern';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constants';
import { MessageDto } from 'src/dto/message.dto';
import { RoomDto } from 'src/dto/room.dto';
import { Message } from 'src/interfaces/message.interface';
import { Room, RoomDocument } from 'src/schema/room.schema';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MessageService {
    constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

    public async initRoom(dto: RoomDto): Promise<any> {
        try {
            const entity: any = await new this.roomModel(Builder(Room).roomId(uuid())
                                                                      .users([dto.users[0], dto.users[1]])
                                                                      .messages([])
                                                                      .createdAt(new Date())
                                                                      .build())
                                                                      .save();

            if(!entity) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "message-service: database error"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(RoomDto).roomId(entity.roomId)
                                         .users(entity.users)
                                         .messages(entity.messages)
                                         .createdAt(entity.createdAt)
                                         .build(),
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "message-service: " + err
            });
        }
    }

    public async create(dto: MessageDto): Promise<any> {
        try {
            const result: any = await this.checkRoom(dto.sender, dto.receiver);
            const roomId = result.payload;

            await this.roomModel.updateOne(
                { roomId: roomId },
                { $push: {
                        messages: Builder(Message).sender(dto.sender)
                                                  .receiver(dto.receiver)
                                                  .content(dto.content)
                                                  .createdAt(new Date())
                                                  .build()
                }}
            )

            const entity = await this.roomModel.findOne({ roomId: roomId });
            
            if(!entity) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "message-service: database error"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(RoomDto).roomId(entity.roomId)
                                         .users(entity.users)
                                         .messages(entity.messages)
                                         .createdAt(entity.createdAt)
                                         .build(),
                message: "Successful transaction"                        
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "message-service: " + err
            });
        }
    }

    public async getRoom(roomId: string): Promise<any> {
        try {
            const entity: any = await this.roomModel.findOne({ roomId: roomId });

            if(!entity) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist room"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(Room).roomId(entity.roomId)
                                      .users(entity.users)
                                      .messages(entity.messages)
                                      .createdAt(entity.createdAt)
                                      .build(),
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "message-service: " + err
            });
        }
    }

    public async getRooms(nickname: string): Promise<any> {
        try {
            const entities: any = await this.roomModel.find({
                users: {
                    $in: [nickname]
                }
            });

            if(!entities) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist rooms data"
                });
            }

            const dtos: Array<RoomDto> = [];

            for(const entity of entities) {
                dtos.push(Builder(RoomDto).roomId(entity.roomId)
                                          .users(entity.users)
                                          .messages(entity.messages)
                                          .createdAt(entity.createdAt)
                                          .build());
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: dtos,
                message: "Successful transaction"
            })
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "message-service: " + err
            });
        }
    }

    public async getRoomsByKeyword(keyword: string): Promise<any> {
        try {
            const entities: any = await this.roomModel.find({
                users: {
                    $in: [keyword]
                }
            });

            if(!entities) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist rooms data"
                });
            }

            const dtos: Array<RoomDto> = [];

            for(const entity of entities) {
                dtos.push(Builder(RoomDto).roomId(entity.roomId)
                                          .users(entity.users)
                                          .messages(entity.messages)
                                          .createdAt(entity.createdAt)
                                          .build());
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: dtos,
                message: "Successful transaction"
            })
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "message-service: " + err
            });
        }
    }

    public async deleteRoom(roomId: string) {
        try {
            const result: any = await this.roomModel.deleteOne({ roomId: roomId });
        
            if(!result) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist room"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: true,
                message: "Successful delete room"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "message-service: " + err
            });
        }
    }

    public async checkRoom(
        user_a: string,
        user_b: string
    ): Promise<any> {
        try {
            const check: any = await this.roomModel.findOne({
                users: {
                    $all: [user_a, user_b]
                }
            });

            if(!check) {
                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: null,
                    message: "Not exist room"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: check.roomId,
                message: "Exist room"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "message-service: " + err
            });
        }
    }
}
