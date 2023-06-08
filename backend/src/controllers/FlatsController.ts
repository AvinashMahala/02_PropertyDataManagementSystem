import {RequestHandler} from 'express';
import * as FlatService  from '../services/FlatsService';
import { IFlatModelCreateModel, IFlatModelUpdateBodyModel, IFlatModelUpdateParamsModel } from '../models/flatModel';


export const getAllFlats:RequestHandler = async(req,res,next)=>{
    await FlatService.getAllFlats(req,res,next);
}

export const getOneFlatDetails:RequestHandler = async(req,res,next)=>{
    await FlatService.getOneFlat(req,res,next);
}

export const createFlatDetails: RequestHandler<unknown, unknown, IFlatModelCreateModel, unknown> = async(req, res, next)=>{
    await FlatService.createFlat(req,res,next);
}
// export const createPropertyDetailsArr: RequestHandler<unknown, unknown, IPropertyModelCreateModel[], unknown> = async(req, res, next)=>{
//     await AllPropertiesService.createPropertyModelArr(req,res,next);
// }


export const updateFlatDetails: RequestHandler<IFlatModelUpdateParamsModel, unknown, IFlatModelUpdateBodyModel, unknown> = async(req, res, next)=>{
    await FlatService.updateFlat(req,res,next);
}

export const deleteFlatDetails:RequestHandler = async(req,res,next)=>{
    await FlatService.deleteFlat(req,res,next);
}

