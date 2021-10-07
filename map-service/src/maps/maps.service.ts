import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { statusConstants } from 'src/constants/status.constant';

@Injectable()
export class MapsService {
    constructor(@Inject('wayfinding-service') private readonly client: ClientProxy) {}

    public getAll(): Observable<any> {
        try {
            return this.client.send({ cmd: 'GET_ALL' }, '');
        } catch(err) {
            return Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Map-service: " + err
            });
        }
    }

    public async getOne(_id: string): Promise<any> {
        try {
            return this.client.send({ cmd: 'GET_ONE' }, _id);
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Map-service: " + err
            });
        }
    }

    public async getListByTypeNm(type_nm: string): Promise<any> {
        try {
            return this.client.send({ cmd: 'GET_LIST_TYPE' }, type_nm);    
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "Map-service: " + err
            });
        }
    }

    public async getListByGuNm(gu_nm: string): Promise<any> {
        try {
            return this.client.send({ cmd: 'GET_LIST_GU' }, gu_nm);
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "map-service: " + err
            });
        }
    }

    public async getListGuNmAndTypeNm(gu_nm: string, type_nm: string): Promise<any> {
        try {
            return this.client.send({ cmd: 'GET_LIST_GU_TYPE' }, [gu_nm, type_nm]);
        } catch(err) {
            return await Object.assign({
                status: statusConstants.ERROR,
                payload: null,
                message: "map-service: " + err
            });
        }
    }
}
