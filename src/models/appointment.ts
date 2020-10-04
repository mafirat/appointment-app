import { IBaseEntity } from "./base";

export interface IAppointment extends IBaseEntity {
    userId: number;
    personId: number;
    title: string;
    description: string;
    notes: string;
    start: string;
    end: string;
    status: string;
}