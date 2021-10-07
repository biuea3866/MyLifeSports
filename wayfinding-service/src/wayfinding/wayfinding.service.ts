import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Builder } from 'builder-pattern';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constant';
import { MapsDto } from 'src/dto/maps.dto';
import { Maps, MapsDocument } from 'src/schema/maps.schema';

@Injectable()
export class WayfindingService {
    constructor(@InjectModel(Maps.name) private mapsModel: Model<MapsDocument>,) {}

    public async getAll(): Promise<any> {
        try {
            const maps = await this.mapsModel.find();

            if(!maps) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Wayfinding-service: Not data!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Success transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Wayfinding-service: " + err
            });
        }
    }

    public async getOne(_id: string): Promise<any> {
        try {
            const map = await this.mapsModel.findById(_id);

            if(!map) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Wayfinding-service: Not data!"
                });
            }
            
            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: Builder(MapsDto)._id(String(map._id))
                                         .ycode(map.ycode)
                                         .type_nm(map.type_nm)
                                         .gu_nm(map.gu_nm)
                                         .parking_lot(map.parking_lot)
                                         .bigo(map.bigo)
                                         .xcode(map.xcode)
                                         .tel(map.tel)
                                         .addr(map.addr)
                                         .in_out(map.in_out)
                                         .home_page(map.home_page)
                                         .edu_yn(map.edu_yn)
                                         .nm(map.nm)
                                         .build(),
                message: "Success transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Wayfinding-service: " + err
            });
        }
    }

    public async getListByTypeNm(type_nm: string): Promise<any> {
        try {
            const maps = await this.mapsModel.find({ type_nm: type_nm });

            if(!maps) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Wayfinding-service: Not data!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Success transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Wayfinding-service: " + err
            });
        }
    }

    public async getListByGuNm(gu_nm: string): Promise<any> {
        try {
            const maps = await this.mapsModel.find({ gu_nm: gu_nm });

            if(!maps) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Wayfinding-service: Not data!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Success transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Wayfinding-service: " + err
            });
        }
    }

    public async getListGuNmAndTypeNm(gu_nm: string, type_nm: string): Promise<any> {
        try {
            const maps = await this.mapsModel.find({ 
                gu_nm: gu_nm,
                type_nm: type_nm
            });

            if(!maps) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Wayfinding-service: Not data!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Success transaction"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Wayfinding-service: " + err
            });
        }
    }
}