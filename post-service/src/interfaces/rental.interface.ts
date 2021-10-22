import { Payment } from "./payment.interface";

export class Rental {
    rentalId: string;

    price: number;

    borrower: string;

    tel: string;

    userId: string;

    date: string;

    time: string;

    mapId: string;

    mapName: string;

    status: string;   

    createdAt: string;

    payment: Payment;
}