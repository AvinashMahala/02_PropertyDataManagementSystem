import {RequestHandler} from 'express';
import * as MaintenanceRequestService  from '../services/MaintenanceRequestsService';
import { IMaintenanceRequestsCreateModel, IMaintenanceRequestsUpdateParamsModel, IMaintenanceRequestsUpdateBodyModel } from '../models/MaintenanceRequestsModels';


export const RetrieveAllRecords:RequestHandler = async(req,res,next)=>{
    await MaintenanceRequestService.RetrieveAllRecords(req,res,next);
}

export const RetrieveOneRecord:RequestHandler = async(req,res,next)=>{
    await MaintenanceRequestService.RetrieveOneRecord(req,res,next);
}

export const CreateOneRecord: RequestHandler<unknown, unknown, IMaintenanceRequestsCreateModel, unknown> = async(req, res, next)=>{
    await MaintenanceRequestService.CreateOneRecord(req,res,next);
}
// export const CreateMultipleRecords: RequestHandler<unknown, unknown, IMaintenanceRequestsCreateModel[], unknown> = async(req, res, next)=>{
//     await MaintenanceRequestService.CreateMultipleRecords(req,res,next);
// }


export const UpdateOneRecord: RequestHandler<IMaintenanceRequestsUpdateParamsModel, unknown, IMaintenanceRequestsUpdateBodyModel, unknown> = async(req, res, next)=>{
    await MaintenanceRequestService.UpdateOneRecord(req,res,next);
}

export const DeleteOneRecord:RequestHandler = async(req,res,next)=>{
    await MaintenanceRequestService.DeleteOneRecord(req,res,next);
}

