import {RequestHandler} from 'express';
import * as RentService  from '../services/RentalRecordsService';
import { IRentCreateModel, IRentUpdateParamsModel, IRentUpdateBodyModel } from '../models/RentalRecordsModels';

export const getAllRents:RequestHandler = async(req,res,next)=>{
    await RentService.getAllRents(req,res,next);
}
export const getOneRent:RequestHandler = async(req,res,next)=>{
    await RentService.getOneRent(req,res,next);
}
export const createRent: RequestHandler<unknown, unknown, IRentCreateModel, unknown> = async(req, res, next)=>{
    await RentService.createRent(req,res,next);
}
export const createRentArr: RequestHandler<unknown, unknown, IRentCreateModel[], unknown> = async(req, res, next)=>{
    await RentService.createRentArr(req,res,next);
}
export const updateRent: RequestHandler<IRentUpdateParamsModel, unknown, IRentUpdateBodyModel, unknown> = async(req, res, next)=>{
    await RentService.updateRent(req,res,next);
}
export const deleteRent:RequestHandler = async(req,res,next)=>{
    await RentService.deleteRent(req,res,next);
}

