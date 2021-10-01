import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { Builder } from 'builder-pattern';
import { statusConstants } from './constants/status.constant';
import { ResponseMaps } from './vo/response.maps';
import { WayfindingService } from './wayfinding/wayfinding.service';

@Controller("wayfinding-service")
export class AppController {
    constructor(private readonly wayfindingService: WayfindingService) {}

    @Get('/')
    public async getAll(): Promise<any> {
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
                message: "Get list of map"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get(':objectId')
    public async getOne(@Param('objectId') objectId: string): Promise<any> {
        try {
            const result: any = await this.wayfindingService.getOne(objectId);

            if(result.status === statusConstants.ERROR)  {
                return await Object.assign({
                    status: statusConstants.ERROR,
                    payload: null,
                    message: "Server error!"
                });
            }

            return await Object.assign({
                status: statusConstants.SUCCESS,
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
                                              .nm(result.payload.nm),
                message: "Get data by objectId"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Server error!"
            });
        }
    }

    @Get('/')
    public async getListByTypeNm(@Query('type_nm') type_nm: string): Promise<any> {
        try {
            const result: any = await this.wayfindingService.getListByTypeNm(type_nm);
            
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
                message: "Get list of map"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }
    
    @Get('')
    public async getListByGuNm(@Query('gu_nm') gu_nm: string) : Promise<any> {
        try {
            const result: any = await this.wayfindingService.getListByGuNm(gu_nm);
            
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
                message: "Get list of map"
            });
        } catch(err) {
            return await Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get('')
    public async getListGuNmAndTypeNm(
        @Query('gu_nm') gu_nm: string,
        @Query('type_nm') type_nm: string
    ): Promise<any> {
        try {
            const result: any = await this.wayfindingService.getListGuNmAndTypeNm(gu_nm, type_nm);
            
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
                message: "Get list of map"
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