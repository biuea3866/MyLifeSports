import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from 'src/schema/rental.schema';
import { RentalService } from './rental.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Rental.name,
      schema: RentalSchema,
    }]),
    HttpModule,
  ],
  providers: [RentalService],
  exports: [RentalService],
})
export class RentalModule {}
