import {RequestHandler} from 'express';
import * as RentReceiptMetaDataDetailsService  from '../services/PaymentMetaDataService';
import { IRentReceiptMetaDataDetailsCreateModel, IRentReceiptMetaDataDetailsUpdateBodyModel, IRentReceiptMetaDataDetailsUpdateParamsModel } from '../models/PaymentMetaDataModels';


export const getAllRentReceiptMetaDataDetails:RequestHandler = async(req,res,next)=>{
    await RentReceiptMetaDataDetailsService.getAllRentReceiptMetaDataDetails(req,res,next);
}

export const getOneRentReceiptMetaDataDetails:RequestHandler = async(req,res,next)=>{
    await RentReceiptMetaDataDetailsService.getOneRentReceiptMetaDataDetails(req,res,next);
}

export const createRentReceiptMetaDataDetails: RequestHandler<unknown, unknown, IRentReceiptMetaDataDetailsCreateModel, unknown> = async(req, res, next)=>{
    await RentReceiptMetaDataDetailsService.createRentReceiptMetaDataDetails(req,res,next);
}
export const createRentReceiptMetaDataDetailsArr: RequestHandler<unknown, unknown, IRentReceiptMetaDataDetailsCreateModel[], unknown> = async(req, res, next)=>{
    await RentReceiptMetaDataDetailsService.createRentReceiptMetaDataDetailsArr(req,res,next);
}


export const updateRentReceiptMetaDataDetails: RequestHandler<IRentReceiptMetaDataDetailsUpdateParamsModel, unknown, IRentReceiptMetaDataDetailsUpdateBodyModel, unknown> = async(req, res, next)=>{
    await RentReceiptMetaDataDetailsService.updateRentReceiptMetaDataDetails(req,res,next);
}

export const deleteRentReceiptMetaDataDetails:RequestHandler = async(req,res,next)=>{
    await RentReceiptMetaDataDetailsService.deleteRentReceiptMetaDataDetails(req,res,next);
}

