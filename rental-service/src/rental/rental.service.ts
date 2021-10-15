import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constant';
import { RentalDto } from 'src/dto/rental.dto';
import { Rental, RentalDocument } from 'src/schema/rental.schema';
import { Builder } from 'builder-pattern';
import { v4 as uuid } from 'uuid';
import { ResponseRental } from 'src/vo/response.rental';
import { status } from 'src/constants/rental.status';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RentalService {
    constructor(
        @InjectModel(Rental.name) private rentalModel: Model<RentalDocument>,    
        @Inject('payment-service') private readonly client: ClientProxy
    ) {}

    public async create(dto: RentalDto): Promise<any> {
        try {
            const entity: any = await new this.rentalModel(Builder(Rental).rentalId(uuid())
                                                                          .price(dto.price)
                                                                          .borrower(dto.borrower)
                                                                          .tel(dto.tel)
                                                                          .userId(dto.userId)
                                                                          .date(dto.date)
                                                                          .time(dto.time)
                                                                          .mapId(dto.mapId)
                                                                          .mapName(dto.mapName)
                                                                          .status(status.PENDING)
                                                                          .createdAt(new Date().toDateString())
                                                                          .build())
                                                                          .save();

            console.log(entity);

            if(!entity) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "rental-service: database error" 
                });
            }

            console.log(Builder(RentalDto).rentalId(entity.rentalId)
            .price(entity.price)
            .borrower(entity.borrower)
            .tel(entity.tel)
            .userId(entity.userId)
            .date(entity.date)
            .time(entity.time)
            .mapId(entity.mapId)
            .mapName(entity.mapName)
            .status(entity.status)
            .createdAt(entity.createdAt)
            .build())
            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(RentalDto).rentalId(entity.rentalId)
                                           .price(entity.price)
                                           .borrower(entity.borrower)
                                           .tel(entity.tel)
                                           .userId(entity.userId)
                                           .date(entity.date)
                                           .time(entity.time)
                                           .mapId(entity.mapId)
                                           .mapName(entity.mapName)
                                           .status(entity.status)
                                           .createdAt(entity.createdAt)
                                           .build(),
                message: "Successful transaction"
            });
        } catch(err) {
            return Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "rental-service: " + err
            });
        }
    }

    public async getOne(rentalId: string): Promise<any> {
        try {
            const result: any = await this.rentalModel.find({ rentalId: rentalId });

            if(!result) {
                return await Object.assign({
                    statusCode: statusConstants.ERROR,
                    payload: null,
                    message: "Not rental data"
                });
            }

            return await Object.assign({
                statusCode: statusConstants.SUCCESS,
                payload: Builder(RentalDto).rentalId(result.rentalId)
                                           .price(result.price)
                                           .borrower(result.borrower)
                                           .tel(result.tel)
                                           .userId(result.userId)
                                           .date(result.date)
                                           .time(result.time)
                                           .mapId(result.mapId)
                                           .mapName(result.mapName)
                                           .status(result.status)
                                           .createdAt(result.createdAt)
                                           .build(),
                message: "Success transcation",
            });
        } catch(err) {
            return await Object.assign({
                statusCode: statusConstants.ERROR,
                payload: null,
                message: "map-service database: " + err,
            });
        }
    }

    public async getRentals(userId: string): Promise<any> {
        try {
            const result: any = await this.rentalModel.find({ userId: userId });
        
            if(!result) {
                return await Object.assign({
                    statusCode: statusConstants.ERROR,
                    payload: null,
                    message: "Not rental datas"
                });
            }

            const dtoRentals: Array<ResponseRental> = [];

            for(const el of result) {
                dtoRentals.push(el);
            }

            return await Object.assign({
                statusCode: statusConstants.SUCCESS,
                payload: dtoRentals,
                message: "Success transcation",
            });
        } catch(err) {
            return await Object.assign({
                statusCode: statusConstants.ERROR,
                payload: null,
                message: "map-service database: " + err,
            });
        }
    }

    public async expiredRental(rentalId): Promise<any> {
        try {
            const result  = await this.rentalModel.updateOne({ rentalId: rentalId }, { $set: { status: status.EXPIRED }});
            
            if(!result) {
                return await Object.assign({
                    statusCode: statusConstants.ERROR,
                    payload: null,
                    message: "Not exist data",
                });
            }

            return await Object.assign({
                statusCode: statusConstants.SUCCESS,
                payload: null,
                message: "Success delete"
            });
        } catch(err) {
            return await Object.assign({
                statusCode: statusConstants.ERROR,
                payload: null,
                message: "rental-service database: " + err,
            });
        }
    }

    public async deleteRental(dto: RentalDto): Promise<any> {
        try {
            const result  = await this.rentalModel.deleteOne({ rentalId: dto.rentalId });
            
            if(!result) {
                return await Object.assign({
                    statusCode: statusConstants.ERROR,
                    payload: null,
                    message: "Not exist data",
                });
            }

            return await Object.assign({
                statusCode: statusConstants.SUCCESS,
                payload: null,
                message: "Success delete"
            });
        } catch(err) {
            return await Object.assign({
                statusCode: statusConstants.ERROR,
                payload: null,
                message: "rental-service database: " + err,
            });
        }
    }

    public async completeRental(dto: RentalDto): Promise<any> {
        try {
            const result  = await this.rentalModel.updateOne({ rentalId: dto.rentalId }, { $set: { status: status.BEING }});
            
            if(!result) {
                return await Object.assign({
                    statusCode: statusConstants.ERROR,
                    payload: null,
                    message: "Not exist data",
                });
            }

            return await Object.assign({
                statusCode: statusConstants.SUCCESS,
                payload: null,
                message: "Success update"
            });
        } catch(err) {
            return await Object.assign({
                statusCode: statusConstants.ERROR,
                payload: null,
                message: "rental-service database: " + err,
            });
        }
    }
}