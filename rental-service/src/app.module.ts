import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/RENTALSERVICE?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
    ClientsModule.register([{
      name: 'payment-service',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://vsrleeyf:O4J_NqiIDQcEtmyEAHHAnhJvsr_4hBYg@snake.rmq2.cloudamqp.com/vsrleeyf'],
        queue: 'paymentToRentalQueue',
        queueOptions: {
          durable: true,
        }
      }
    }]),
    RentalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
