import {RequestHandler} from 'express';
import * as OwnerDetailsService  from '../services/OwnersService';
import { IOwnerDetailsCreateModel, IOwnerDetailsUpdateBodyModel, IOwnerDetailsUpdateParamsModel } from '../models/OwnersModels';


export const RetrieveAllRecords:RequestHandler = async(req,res,next)=>{
    await OwnerDetailsService.RetrieveAllRecords(req,res,next);
}

export const RetrieveOneRecord:RequestHandler = async(req,res,next)=>{
    await OwnerDetailsService.RetrieveOneRecord(req,res,next);
}

export const CreateOneRecord: RequestHandler<unknown, unknown, IOwnerDetailsCreateModel, unknown> = async(req, res, next)=>{
    await OwnerDetailsService.CreateOneRecord(req,res,next);
}
export const CreateMultipleRecords: RequestHandler<unknown, unknown, IOwnerDetailsCreateModel[], unknown> = async(req, res, next)=>{
    await OwnerDetailsService.CreateMultipleRecords(req,res,next);
}


export const UpdateOneRecord: RequestHandler<IOwnerDetailsUpdateParamsModel, unknown, IOwnerDetailsUpdateBodyModel, unknown> = async(req, res, next)=>{
    await OwnerDetailsService.UpdateOneRecord(req,res,next);
}

export const DeleteOneRecord:RequestHandler = async(req,res,next)=>{
    await OwnerDetailsService.DeleteOneRecord(req,res,next);
}

