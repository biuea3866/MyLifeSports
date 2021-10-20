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

export const getRental = rentalId => client.get(`http://10.0.2.2:8000/rental-service/${rentalId}/rental`);

export const getRentals = userId => client.get(`http://10.0.2.2:8000/rental-service/${userId}/rentals`);

export const deleteRental = rentalId => client.delete(`http://10.0.2.2:8000/rental-service/${rentalId}/rental`);