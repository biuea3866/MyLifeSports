import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Builder } from 'builder-pattern';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constants';
import { PaymentDto } from 'src/dto/payment.dto';
import { Payment, PaymentDocument } from 'src/schema/payment.schema';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
        @Inject('payment-service') private readonly client: ClientProxy
    ) {}

    public async create(dto: PaymentDto): Promise<any> {
        try {
            const entity = await new this.paymentModel(Builder(Payment).paymentId(uuid())
                                                                       .paymentName(dto.paymentName)
                                                                       .payer(dto.payer)
                                                                       .price(dto.price)
                                                                       .rentalId(dto.rentalId)
                                                                       .createdAt(new Date().toDateString())
                                                                       .build())
                                                                       .save();

            if(!entity) {
                this.client.emit('PAYMENT_RESPONSE', 'FAILURE');
                
                return Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "payment-service: Not successful transaction"
                });
            }

            this.client.emit('PAYMENT_RESPONSE', entity);

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(PaymentDto).paymentId(entity.paymentId)
                                            .paymentName(entity.paymentName)
                                            .payer(entity.payer)
                                            .price(entity.price)
                                            .rentalId(entity.rentalId)
                                            .createdAt(entity.createdAt)
                                            .build(),
                message: "Successful transaction"
            });
        } catch(err) {
            this.client.emit('PAYMENT_RESPONSE', 'FAILURE');

            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "payment-service: Database error"
            });
        }
    }

    public async getPayment(paymentId: string): Promise<any> {
        try {
            const entity = await this.paymentModel.findOne({ paymentId: paymentId });

            if(!entity) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "payment-service: Not exist data",
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(PaymentDto).paymentId(entity.paymentId)
                                            .paymentName(entity.paymentName)
                                            .payer(entity.payer)
                                            .price(entity.price)
                                            .rentalId(entity.rentalId)
                                            .createdAt(entity.createdAt)
                                            .build(),
                message: "Successful transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "payment-service: Database error"
            });
        }
    }
}