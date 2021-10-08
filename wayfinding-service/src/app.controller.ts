import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Builder } from 'builder-pattern';
import { statusConstants } from './constants/status.constant';
import { ResponseMaps } from './vo/response.maps';
import { WayfindingService } from './wayfinding/wayfinding.service';

@Controller("wayfinding-service")
export class AppController {
    constructor(private readonly wayfindingService: WayfindingService) {}

    @MessagePattern({ cmd: 'GET_ALL' })
    public async getAll(data: any): Promise<any> {
        try {
            const result: any = await this.wayfindingService.getAll();

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            const responseMaps: Array<ResponseMaps> = [];

            for(const el of result.payload) {
                responseMaps.push(el);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responseMaps,
                message: result.message
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @MessagePattern({ cmd: 'GET_ONE' })
    public async getOne(data: any): Promise<any> {
        try {
            const result: any = await this.wayfindingService.getOne(data);

            if(result.status === statusConstants.ERROR)  {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Error message: " + result.message,
                });
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: Builder(ResponseMaps)._id(result.payload._id)
                                              .ycode(result.payload.ycode)
                                              .type_nm(result.payload.type_nm)
                                              .gu_nm(result.payload.gu_nm)
                                              .parking_lot(result.payload.parking_lot)
                                              .bigo(result.payload.bigo)
                                              .xcode(result.payload.xcode)
                                              .tel(result.payload.tel)
                                              .addr(result.payload.addr)
                                              .in_out(result.payload.in_out)
                                              .home_page(result.payload.home_page)
                                              .edu_yn(result.payload.edu_yn)
                                              .nm(result.payload.nm)
                                              .build(),
                message: result.message
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Error Message: " + err
            });
        }
    }

    @MessagePattern({ cmd: 'GET_LIST_TYPE' })
    public async getListByTypeNm(data: any): Promise<any> {
        try {
            const result: any = await this.wayfindingService.getListByTypeNm(data);
            
            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            const responseMaps: Array<ResponseMaps> = [];

            for(const el of result.payload) {
                responseMaps.push(el);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responseMaps,
                message: result.message,
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err,
            });
        }
    }
    
    @MessagePattern({ cmd: 'GET_LIST_GU' })
    public async getListByGuNm(data: any) : Promise<any> {
        try {
            const result: any = await this.wayfindingService.getListByGuNm(data);

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            const responseMaps: Array<ResponseMaps> = [];

            for(const el of result.payload) {
                responseMaps.push(el);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responseMaps,
                message: result.message,
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @MessagePattern({ cmd: 'GET_LIST_GU_TYPE' })
    public async getListGuNmAndTypeNm(data: any): Promise<any> {
        try {
            const result: any = await this.wayfindingService.getListGuNmAndTypeNm(data[0], data[1]);
            

            if(result.status === statusConstants.ERROR) {
                return await Object.assign({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    payload: null,
                    message: "Error message: " + result.message
                });
            }

            const responseMaps: Array<ResponseMaps> = [];

            for(const el of result.payload) {
                responseMaps.push(el);
            }

            return await Object.assign({
                status: HttpStatus.OK,
                payload: responseMaps,
                message: result.message,
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }
}