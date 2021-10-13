import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from 'src/schema/payment.schema';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Payment.name,
      schema: PaymentSchema,
    }]),
  ],
  providers: [PaymentService],
  exports: [PaymentService]
})
export class PaymentModule {}
