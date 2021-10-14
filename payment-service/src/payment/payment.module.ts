import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from 'src/schema/payment.schema';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Payment.name,
      schema: PaymentSchema,
    }]),
    ClientsModule.register([{
      name: 'payment-service',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://vsrleeyf:O4J_NqiIDQcEtmyEAHHAnhJvsr_4hBYg@snake.rmq2.cloudamqp.com/vsrleeyf'],
        queue: 'paymentToRentalQueue',
        queueOptions: {
          durable: true
        }
      }
    }]),
  ],
  providers: [PaymentService],
  exports: [PaymentService]
})
export class PaymentModule {}
