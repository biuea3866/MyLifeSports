import client from './client';

export const requestPayment = ({
    paymentName,
    payer,
    rentalId,
    price
}) => client.post('http://10.0.2.2:8000/payment-service/payment', {
    paymentName,
    payer,
    rentalId,
    price
});

export const getPayements = borrower => client.get(`http://10.0.2.2:8000/payment-service/${borrower}/payments`);

export const getPayment = paymentId => client.get(`http://10.0.2.2:8000/${paymentId}/payment`);