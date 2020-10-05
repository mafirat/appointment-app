import { IBaseEntity } from "./base";

export interface IPerson extends IBaseEntity{
    name:string;
    lastname:string;    
}