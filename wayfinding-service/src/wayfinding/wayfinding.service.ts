import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { statusConstants } from 'src/constants/status.constant';
import { MapsDto } from 'src/dto/maps.dto';
import { Maps, MapsDocument } from 'src/schema/maps.schema';

@Injectable()
export class WayfindingService {
    constructor(@InjectModel(Maps.name) private mapsModel: Model<MapsDocument>) {}

    public async getAll(): Promise<any> {
        try {
            const maps = await this.mapsModel.find();

            if(!maps) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Database error!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Successfully get list of map in database"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Database error!"
            });
        }
    }

    public async getOne(objectId: string): Promise<any> {
        try {
            const map = await this.mapsModel.findOne({ objectId: objectId });

            if(!map) {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Database error!"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: map,
                message: "Successfully get one data in database"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Database error!"
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
                    message: "Database error!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Successfully get list of map in database"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Database error!"
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
                    message: "Database error!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Successfully get list of map in database"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Database error!"
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
                    message: "Database error!"
                });
            }

            const result: Array<MapsDto> = [];

            for(const element of maps) {
                result.push(element);
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
                payload: result,
                message: "Successfully get list of map in database"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Database error!"
            });
        }
    }
}