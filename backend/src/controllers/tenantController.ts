import {RequestHandler} from 'express';
import * as TenantService  from '../services/tenantService';
import { ITenantCreateModel, ITenantUpdateParamsModel, ITenantUpdateBodyModel } from '../models/tenantModel';


export const getAllTenants:RequestHandler = async(req,res,next)=>{
    await TenantService.getAllTenants(req,res,next);
}

export const getOneTenant:RequestHandler = async(req,res,next)=>{
    await TenantService.getOneTenant(req,res,next);
}

export const createTenant: RequestHandler<unknown, unknown, ITenantCreateModel, unknown> = async(req, res, next)=>{
    await TenantService.createTenant(req,res,next);
}
// export const createPropertyDetailsArr: RequestHandler<unknown, unknown, IPropertyModelCreateModel[], unknown> = async(req, res, next)=>{
//     await TenantService.createPropertyModelArr(req,res,next);
// }


export const updateTenant: RequestHandler<ITenantUpdateParamsModel, unknown, ITenantUpdateBodyModel, unknown> = async(req, res, next)=>{
    await TenantService.updateTenant(req,res,next);
}

export const deleteTenant:RequestHandler = async(req,res,next)=>{
    await TenantService.deleteTenant(req,res,next);
}

