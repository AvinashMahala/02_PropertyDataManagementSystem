import {RequestHandler} from 'express';
import * as AllPropertiesService  from '../services/PropertiesService';
import { IPropertyModelCreateModel, IPropertyModelUpdateBodyModel, IPropertyModelUpdateParamsModel } from '../models/PropertiesModels';


export const RetrieveAllRecords:RequestHandler = async(req,res,next)=>{
    await AllPropertiesService.RetrieveAllRecords(req,res,next);
}

export const RetrieveOneRecord:RequestHandler = async(req,res,next)=>{
    await AllPropertiesService.RetrieveOneRecord(req,res,next);
}

export const CreateOneRecord: RequestHandler<unknown, unknown, IPropertyModelCreateModel, unknown> = async(req, res, next)=>{
    await AllPropertiesService.CreateOneRecord(req,res,next);
}
// export const CreateMultipleRecords: RequestHandler<unknown, unknown, IPropertyModelCreateModel[], unknown> = async(req, res, next)=>{
//     await AllPropertiesService.CreateMultipleRecords(req,res,next);
// }


export const UpdateOneRecord: RequestHandler<IPropertyModelUpdateParamsModel, unknown, IPropertyModelUpdateBodyModel, unknown> = async(req, res, next)=>{
    await AllPropertiesService.UpdateOneRecord(req,res,next);
}

export const DeleteOneRecord:RequestHandler = async(req,res,next)=>{
    await AllPropertiesService.DeleteOneRecord(req,res,next);
}

