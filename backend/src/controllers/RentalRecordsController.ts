import {RequestHandler} from 'express';
import * as RentService  from '../services/RentalRecordsService';
import { IRentCreateModel, IRentUpdateParamsModel, IRentUpdateBodyModel } from '../models/RentalRecordsModels';

export const RetrieveAllRecords:RequestHandler = async(req,res,next)=>{
    await RentService.RetrieveAllRecords(req,res,next);
}
export const RetrieveOneRecord:RequestHandler = async(req,res,next)=>{
    await RentService.RetrieveOneRecord(req,res,next);
}
export const CreateOneRecord: RequestHandler<unknown, unknown, IRentCreateModel, unknown> = async(req, res, next)=>{
    await RentService.CreateOneRecord(req,res,next);
}
export const CreateMultipleRecords: RequestHandler<unknown, unknown, IRentCreateModel[], unknown> = async(req, res, next)=>{
    await RentService.CreateMultipleRecords(req,res,next);
}
export const UpdateOneRecord: RequestHandler<IRentUpdateParamsModel, unknown, IRentUpdateBodyModel, unknown> = async(req, res, next)=>{
    await RentService.UpdateOneRecord(req,res,next);
}
export const DeleteOneRecord:RequestHandler = async(req,res,next)=>{
    await RentService.DeleteOneRecord(req,res,next);
}

