import { Controller, HttpStatus } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { Builder } from "builder-pattern";
import { statusConstants } from "./constants/status.constants";
import { PaymentDto } from "./dto/payment.dto";
import { PaymentService } from "./payment/payment.service";
import { ResponsePayment } from "./vo/response.payment";

@Controller('payment-service')
export class AppController {
    constructor(private readonly paymentService: PaymentService) {}

    @MessagePattern({ cmd: 'PAYMENT' })
    public async payment(data: any): Promise<any> {
        try {
            const result: any = this.paymentService.create(Builder(PaymentDto).paymentName(data.paymentName)
                                                                              .rentalId(data.rentalId)
                                                                              .payer(data.payer)
                                                                              .price(data.price)
                                                                              .build());

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message,
                });
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: Builder(ResponsePayment).paymentName(result.payload.paymentName)
                                                 .payer(result.payload.payer)
                                                 .rentalId(result.payload.rentalId)
                                                 .paymentId(result.payload.paymentId)
                                                 .price(result.payload.price)
                                                 .createdAt(result.payload.createdAt)
                                                 .build(),
                message: "Complete payment!"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @MessagePattern({ cmd: 'GET_PAYMENT' })
    public async getPayment(data: any): Promise<any> {
        try {
            const result: any = this.paymentService.getPayment(data);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: result.message,
                });
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: Builder(ResponsePayment).paymentName(result.payload.paymentName)
                                                .payer(result.payload.payer)
                                                .rentalId(result.payload.rentalId)
                                                .paymentId(result.payload.paymentId)
                                                .price(result.payload.price)
                                                .createdAt(result.payload.createdAt)
                                                .build(),
                message: "Get data by rentalId",
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err,
            });
        }
    }
}