import client from './client';

export const rental = ({ 
    price,
    borrower,
    tel,
    userId,
    date,
    time,
    mapId,
    mapName
}) => client.post('http://10.0.2.2:8000/rental-service/rental', {
    price,
    borrower,
    tel,
    userId,
    date,
    time,
    mapId,
    mapName
});
