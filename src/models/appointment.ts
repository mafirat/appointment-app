import { IBaseEntity } from "./base";

export interface IAppointment extends IBaseEntity {
    userId: number;
    personId: number;
    description: number;
    notes: string;
    start: string;
    ends: string;
    state: string;
}