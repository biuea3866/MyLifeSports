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

    public async create(dto: MessageDto): Promise<any> {
        try {
            const check: any = await this.checkRoom(
                dto.sender, 
                dto.receiver
            );
            var entity: any = null;
            
            if(!check.payload) {
                entity = Builder(Room).roomId(uuid())
                                      .messages([])
                                      .createdAt(new Date())
                                      .build();

                entity.messages.push(Builder(Message).sender(dto.sender)
                                                     .receiver(dto.receiver)
                                                     .content(dto.content)
                                                     .createdAt(new Date())
                                                     .build());

                entity = await new this.roomModel(entity).save();

                if(!entity) {
                    return await Object.assign({
                        status: statusConstants.ERROR,
                        payload: null,
                        message: "Successful transaction"                        
                    });
                }

                return await Object.assign({
                    status: statusConstants.SUCCESS,
                    payload: Builder(RoomDto).roomId(entity.roomId)
                                             .messages(entity.messages)
                                             .createdAt(entity.createdAt)
                                             .build(),
                    message: "Successful transaction"                        
                });
            }

            await this.roomModel.updateOne(
                { roomId: check.payload },
                { $push: {
                        messages: Builder(Message).sender(dto.sender)
                                                  .receiver(dto.receiver)
                                                  .content(dto.content)
                                                  .createdAt(new Date())
                                                  .build()
                }}
            )

            entity = await this.roomModel.findOne({ roomId: check.payload });
            
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
        sender: string,
        receiver: string
    ): Promise<any> {
        try {
            const check: any = await this.roomModel.findOne({
                $or: [
                    { 
                        'messages.sender': sender,
                        'messages.receiver': receiver,
                    },
                    {
                        'messages.sender': receiver,
                        'messages.receiver': sender
                    }
                ]
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
