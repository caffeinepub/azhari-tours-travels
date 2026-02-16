import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    selectedMonth: string;
    clientName: string;
    createdAt: Time;
    clientPhone: string;
}
export type Time = bigint;
export interface backendInterface {
    createBooking(clientName: string, clientPhone: string, selectedMonth: string): Promise<string>;
    getBookingsByMonth(month: string): Promise<Array<Booking>>;
}
