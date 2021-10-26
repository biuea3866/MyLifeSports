import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from 'src/schema/room.schema';
import { MessageService } from './message.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Room.name,
      schema: RoomSchema,
    }]),
  ],
  providers: [MessageService],
  exports: [MessageService]
})
export class MessageModule {}
