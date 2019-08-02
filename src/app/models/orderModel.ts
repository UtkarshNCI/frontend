import { Product } from './productModel';

export interface Order
{
     orderID :number;
     products:Product[];
     email:string;
     doo:Date;
    // status:string;
     total:number;
     address:string;
}