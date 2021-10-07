import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WayfindingModule } from './wayfinding/wayfinding.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/WAYFINDINGSERVICE?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"),
    WayfindingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
