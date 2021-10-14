import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/PAYMENTSERVICE?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"),
    ClientsModule.register([{
      name: 'payment-rental',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'payment-rental',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'payment-rental-consumer'
        }
      }
    }]),
    PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
