import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/RENTALSERVICE?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
    RentalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
