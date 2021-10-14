import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { Builder } from "builder-pattern";
import { statusConstants } from "./constants/status.constants";
import { PaymentDto } from "./dto/payment.dto";
import { PaymentService } from "./payment/payment.service";
import { RequestPayment } from "./vo/request.payment";
import { ResponsePayment } from "./vo/response.payment";

@Controller('payment-service')
export class AppController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post('payment')
    public async payment(@Body() vo: RequestPayment): Promise<any> {
        try {
            const result: any = this.paymentService.create(Builder(PaymentDto).paymentName(vo.paymentName)
                                                                              .rentalId(vo.rentalId)
                                                                              .payer(vo.payer)
                                                                              .price(vo.price)
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

    @Get('payment/:paymentId')
    public async getPayment(@Param('paymentId') paymentId: string): Promise<any> {
        try {
            const result: any = this.paymentService.getPayment(paymentId);

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