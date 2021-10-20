import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/POSTSERVICE?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
