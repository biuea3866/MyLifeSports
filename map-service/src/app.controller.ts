import { Controller, Get, HttpStatus, Param, Query } from "@nestjs/common";
import { Builder } from "builder-pattern";
import { statusConstants } from "./constants/status.constant";
import { MapsService } from "./maps/maps.service";
import { ResponseMaps } from "./vo/response.maps";

@Controller("map-service")
export class AppController {
    constructor(private readonly mapsService: MapsService) {}

    @Get('/')
    public getAll(): any {
        try {
            const result: any = this.mapsService.getAll();

            if(result.status !== HttpStatus.OK) {
                return result;
            }

            return result;
        } catch(err) {
            return Object.assign({
                status: HttpStatus.BAD_REQUEST,
                payload: null,
                message: "Error message: " + err
            });
        }
    }

    @Get('map/:_id')
    public async getOne(@Param('_id') _id: string): Promise<any> {
        try {
            const result: any = await this.mapsService.getOne(_id);

            if(result.status !== HttpStatus.OK) {
                return result;
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
                message: "Get data by _id"
            });
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Error Message: " + err
            });
        }
    }

    @Get('maps/list-type-nm/:type_nm')
    public async getListByTypeNm(@Param('type_nm') type_nm: string): Promise<any> {
        try {
            const result: any = await this.mapsService.getListByTypeNm(type_nm);
            
            if(result.status !== HttpStatus.OK) {
                return result;
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
    
    @Get('maps/list-gu-nm/:gu_nm')
    public async getListByGuNm(@Param('gu_nm') gu_nm: string) : Promise<any> {
        try {
            const result: any = await this.mapsService.getListByGuNm(gu_nm);

            if(result.status !== HttpStatus.OK) {
                return result;
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

    @Get('maps/list-gu-type')
    public async getListGuNmAndTypeNm(@Query() query): Promise<any> {
        try {
            const result: any = await this.mapsService.getListGuNmAndTypeNm(query.gu_nm, query.type_nm);
            
            if(result.status !== HttpStatus.OK) {
                return result;
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