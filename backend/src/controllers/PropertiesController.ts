import {RequestHandler} from 'express';
import * as AllPropertiesService  from '../services/PropertiesService';
import { IPropertyModelCreateModel, IPropertyModelUpdateBodyModel, IPropertyModelUpdateParamsModel } from '../models/PropertiesModels';


export const getAllPropertiesDetails:RequestHandler = async(req,res,next)=>{
    await AllPropertiesService.getAllPropertyModels(req,res,next);
}

export const getOnePropertiesDetails:RequestHandler = async(req,res,next)=>{
    await AllPropertiesService.getOnePropertyModel(req,res,next);
}

export const createPropertyDetails: RequestHandler<unknown, unknown, IPropertyModelCreateModel, unknown> = async(req, res, next)=>{
    await AllPropertiesService.createPropertyModel(req,res,next);
}
// export const createPropertyDetailsArr: RequestHandler<unknown, unknown, IPropertyModelCreateModel[], unknown> = async(req, res, next)=>{
//     await AllPropertiesService.createPropertyModelArr(req,res,next);
// }


export const updatePropertyDetails: RequestHandler<IPropertyModelUpdateParamsModel, unknown, IPropertyModelUpdateBodyModel, unknown> = async(req, res, next)=>{
    await AllPropertiesService.updatePropertyModel(req,res,next);
}

export const deletePropertyDetails:RequestHandler = async(req,res,next)=>{
    await AllPropertiesService.deletePropertyModel(req,res,next);
}

