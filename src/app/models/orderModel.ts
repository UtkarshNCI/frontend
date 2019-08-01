import { Product } from './productModel';

export interface Order
{
     orderID :number;
     products:number[];
     email:string;
     doo:Date;
    // status:string;
     total:number;
     address:string;
}