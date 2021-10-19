import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
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
            const result: any = await this.paymentService.create(Builder(PaymentDto).paymentName(vo.paymentName)
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

    @Get(':paymentId/payment')
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

    @Get(':payer/payments')
    public async getPayments(@Param('payer') payer: string): Promise<any> {
        try {
            const result: any = await this.paymentService.getPayments(payer);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Not exists payment datas"
                });
            }

            var resposnePayments: Array<ResponsePayment> = [];
            
            for(const el of result.payload) {
                resposnePayments.push(el);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: resposnePayments,
                message: "Success get payment data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get(':rentalId/payment-from-rental')
    public async getPaymentFromRental(@Param('rentalId') rentalId: string): Promise<any> {
        try {
            const result: any = await this.paymentService.getPaymentFromRental(rentalId);

            console.log(result);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            if(!result.payload) {
                return await Object.assign({
                    status: HttpStatus.OK,
                    payload: null,
                    message: "Success get data"
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
                message: "Success get data"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_GATEWAY,
                payload: null,
                message: "Error message: " + err,
            });
        }
    }
}