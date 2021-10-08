import client from './client';
import qs from 'qs';

export const getOne = id => client.get(`http://10.0.2.2:8000/map-service/map/${id}`);

export const getAll = () => client.get('http://10.0.2.2:8000/map-service/');

export const getListByType = type_nm => client.get(`http://10.0.2.2:8000/map-service/maps/list-type-nm/${type_nm}`);

export const getListByGu = gu_nm => client.get(`http://10.0.2.2:8000/map-service/maps/list-gu-nm/${gu_nm}`);

export const getListByGuType = ({ 
    type_nm,
    gu_nm
}) => client.get(`http://10.0.2.2:8000/map-service/maps/list-gu-type?${qs.stringify({ gu_nm, type_nm })}`);