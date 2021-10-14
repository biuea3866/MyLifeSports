import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from 'src/schema/rental.schema';
import { RentalService } from './rental.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Rental.name,
      schema: RentalSchema,
    }]),
    ClientsModule.register([{
      name: 'payment-service',
      transport: Transport.TCP
    }]),
  ],
  providers: [RentalService],
  exports: [RentalService],
})
export class RentalModule {}
