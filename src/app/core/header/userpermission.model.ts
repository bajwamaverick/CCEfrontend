import { Guid } from 'guid-typescript';
import {Ipermission}  from './permission.model'

export interface Iuserpermission {
     userId:Guid,
     email:string,
     userName:string,
     firstName:string,
     lastName:string,
     instanceId:Guid,
     instanceName:string,
     permission : Ipermission[] 



}
