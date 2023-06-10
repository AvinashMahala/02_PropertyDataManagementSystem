import {RequestHandler} from 'express';
import * as TenantService  from '../services/TenantsService';
import { ITenantCreateModel, ITenantUpdateParamsModel, ITenantUpdateBodyModel } from '../models/TenantsModels';


export const RetrieveAllRecords:RequestHandler = async(req,res,next)=>{
    await TenantService.RetrieveAllRecords(req,res,next);
}

export const RetrieveOneRecord:RequestHandler = async(req,res,next)=>{
    await TenantService.RetrieveOneRecord(req,res,next);
}

export const CreateOneRecord: RequestHandler<unknown, unknown, ITenantCreateModel, unknown> = async(req, res, next)=>{
    await TenantService.CreateOneRecord(req,res,next);
}
// export const CreateMultipleRecords: RequestHandler<unknown, unknown, IPropertyModelCreateModel[], unknown> = async(req, res, next)=>{
//     await TenantService.CreateMultipleRecords(req,res,next);
// }


export const UpdateOneRecord: RequestHandler<ITenantUpdateParamsModel, unknown, ITenantUpdateBodyModel, unknown> = async(req, res, next)=>{
    await TenantService.UpdateOneRecord(req,res,next);
}

export const DeleteOneRecord:RequestHandler = async(req,res,next)=>{
    await TenantService.DeleteOneRecord(req,res,next);
}

