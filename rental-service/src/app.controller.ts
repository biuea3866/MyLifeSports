import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { statusConstants } from "./constants/status.constant";
import { RentalService } from "./rental/rental.service";
import { RequestRental } from "./vo/request.rental";
import { ResponseRental } from "./vo/response.rental";
import { Builder } from 'builder-pattern';
import { RentalDto } from "./dto/rental.dto";
import { EventPattern } from "@nestjs/microservices";

@Controller('rental-service')
export class AppController {
    constructor(private readonly rentalService: RentalService) {}

    @Post('rental')
    public async rental(@Body() vo: RequestRental): Promise<any> {
        try {
            const result: any = await this.rentalService.create(Builder(RentalDto).price(vo.price)
                                                                                  .borrower(vo.borrower)
                                                                                  .tel(vo.tel)
                                                                                  .userId(vo.userId)
                                                                                  .date(vo.date)
                                                                                  .time(vo.time)
                                                                                  .mapId(vo.mapId)
                                                                                  .mapName(vo.mapName)
                                                                                  .build());

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: result.message
                });
            }

            return await Object.assign({
                statusCode: HttpStatus.CREATED,
                payload: Builder(ResponseRental).rentalId(result.payload.rentalId)
                                                .price(result.payload.price)
                                                .borrower(result.payload.borrower)
                                                .tel(result.payload.tel)
                                                .userId(result.payload.userId)
                                                .date(result.payload.date)
                                                .time(result.payload.time)
                                                .mapId(result.payload.mapId)
                                                .mapName(result.payload.mapName)
                                                .status(result.payload.status)
                                                .build(),
                message: "Successfully rental"
            });
        } catch(err) {
            return await Object.assign({
                statusCode: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    } 

    @Get(':rentalId/rental')
    public async getRental(@Param('rentalId') rentalId: string) {
        try {
            const result: any = await this.rentalService.getOne(rentalId);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: result.message
                });
            }

            return await Object.assign({
                statusCode: HttpStatus.OK,
                payload: Builder(ResponseRental).rentalId(result.payload.rentalId)
                                                .price(result.payload.price)
                                                .borrower(result.payload.borrower)
                                                .tel(result.payload.tel)
                                                .userId(result.payload.userId)
                                                .date(result.payload.date)
                                                .time(result.payload.time)
                                                .mapId(result.payload.mapId)
                                                .mapName(result.payload.mapName)
                                                .status(result.payload.status)
                                                .build(),
                message: "Get rental by rentalId"
            });
        } catch(e) {
            return await Object.assign({
                statusCode: HttpStatus.BAD_REQUEST,
                payload: null,
                message: e
            });
        }
    }

    @Get(':userId/rentals')
    public async getRentals(@Param('userId') userId: string) {
        try {
            const result: any = await this.rentalService.getRentals(userId);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: result.message
                });
            }

            const responseRentals: Array<ResponseRental> = [];

            for(const el of result.payload) {
                responseRentals.push(el);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responseRentals,
                message: "Get list by userId"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Patch(':rentalId/rental')
    public async expiredRental(@Param('rentalId') rentalId: string) {
        try {
            const result: any = await this.rentalService.expiredRental(rentalId);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: result.message
                });
            }

            return await Object.assign({
                statusCode: HttpStatus.OK,
                payload: null,
                message: "Successfully rental"
            });
        } catch(e) {
            return await Object.assign({
                statusCode: HttpStatus.BAD_REQUEST,
                payload: null,
                message: e
            });
        }
    }

    @Delete(':rentalId/rental')
    public async deleteRental(@Param('rentalId') rentalId: string): Promise<any> {
        try {
            const result: any = this.rentalService.deleteRental(rentalId);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: null,
                message: "Successful delete one"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @EventPattern('PAYMENT_RESPONSE')
    public async responsePayment(data: any): Promise<any> {
        try {
            if(data === 'FAILURE_PAYMENT') {
                const result: any = await this.rentalService.deleteRental(data.rentalId);

                if(result.status === statusConstants.ERROR) {
                    return await Object.assign({
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        payload: null,
                        message: "Error message: " + result.message
                    });
                }

                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + data
                });
            }

            const result: any = await this.rentalService.completeRental(Builder(RentalDto).rentalId(data.rentalId)
                                                                                          .build());

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            return await Object.assign({
               status: HttpStatus.OK,
               payload: null,
               message: "Successful complete rental!" 
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                payload: null,
                message: "Error message: " + err
            });
        }
    }
}