import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/MESSAGESERVICE?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"),
    MessageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
