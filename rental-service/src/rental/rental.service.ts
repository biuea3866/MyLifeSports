import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
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

    public create(dto: RentalDto): Observable<any> {
        try {
            const entity = new this.rentalModel(Builder(Rental).rentalId(uuid())
                                                               .price(dto.price)
                                                               .borrower(dto.borrower)
                                                               .tel(dto.tel)
                                                               .userId(dto.userId)
                                                               .date(dto.date)
                                                               .time(dto.time)
                                                               .mapId(dto.mapId)
                                                               .mapName(dto.mapName)
                                                               .status(dto.status)
                                                               .createdAt(new Date().toDateString())
                                                               .build());
            
            entity.save();

            return this.client.send({ cmd: 'PAYMENT' }, [
                entity.mapName,
                entity.rentalId,
                entity.borrower,
                entity.price
            ]);
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

    public async deleteRental(rentalId): Promise<any> {
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
}