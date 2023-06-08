import {RequestHandler} from 'express';
import * as RentReceiptMetaDataDetailsService  from '../services/PaymentMetaDataService';
import { IRentReceiptMetaDataDetailsCreateModel, IRentReceiptMetaDataDetailsUpdateBodyModel, IRentReceiptMetaDataDetailsUpdateParamsModel } from '../models/PaymentMetaDataModels';


export const RetrieveAllRecords:RequestHandler = async(req,res,next)=>{
    await RentReceiptMetaDataDetailsService.RetrieveAllRecords(req,res,next);
}

export const RetrieveOneRecord:RequestHandler = async(req,res,next)=>{
    await RentReceiptMetaDataDetailsService.RetrieveOneRecord(req,res,next);
}

export const CreateOneRecord: RequestHandler<unknown, unknown, IRentReceiptMetaDataDetailsCreateModel, unknown> = async(req, res, next)=>{
    await RentReceiptMetaDataDetailsService.CreateOneRecord(req,res,next);
}
export const CreateMultipleRecords: RequestHandler<unknown, unknown, IRentReceiptMetaDataDetailsCreateModel[], unknown> = async(req, res, next)=>{
    await RentReceiptMetaDataDetailsService.CreateMultipleRecords(req,res,next);
}


export const UpdateOneRecord: RequestHandler<IRentReceiptMetaDataDetailsUpdateParamsModel, unknown, IRentReceiptMetaDataDetailsUpdateBodyModel, unknown> = async(req, res, next)=>{
    await RentReceiptMetaDataDetailsService.UpdateOneRecord(req,res,next);
}

export const DeleteOneRecord:RequestHandler = async(req,res,next)=>{
    await RentReceiptMetaDataDetailsService.DeleteOneRecord(req,res,next);
}

