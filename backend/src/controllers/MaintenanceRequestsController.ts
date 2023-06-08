import {RequestHandler} from 'express';
import * as MaintenanceRequestService  from '../services/MaintenanceRequestsService';
import { IMaintenanceRequestsCreateModel, IMaintenanceRequestsUpdateParamsModel, IMaintenanceRequestsUpdateBodyModel } from '../models/MaintenanceRequestsModels';


export const getAllMaintenanceRequests:RequestHandler = async(req,res,next)=>{
    await MaintenanceRequestService.getAllMaintenanceRequests(req,res,next);
}

export const getOneMaintenanceRequest:RequestHandler = async(req,res,next)=>{
    await MaintenanceRequestService.getOneMaintenanceRequest(req,res,next);
}

export const createMaintenanceRequest: RequestHandler<unknown, unknown, IMaintenanceRequestsCreateModel, unknown> = async(req, res, next)=>{
    await MaintenanceRequestService.createMaintenanceRequest(req,res,next);
}
// export const createPropertyDetailsArr: RequestHandler<unknown, unknown, IMaintenanceRequestsCreateModel[], unknown> = async(req, res, next)=>{
//     await MaintenanceRequestService.createPropertyModelArr(req,res,next);
// }


export const updateMaintenanceRequest: RequestHandler<IMaintenanceRequestsUpdateParamsModel, unknown, IMaintenanceRequestsUpdateBodyModel, unknown> = async(req, res, next)=>{
    await MaintenanceRequestService.updateMaintenanceRequest(req,res,next);
}

export const deleteMaintenanceRequest:RequestHandler = async(req,res,next)=>{
    await MaintenanceRequestService.deleteMaintenanceRequest(req,res,next);
}

