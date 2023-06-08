import {RequestHandler} from 'express';
import * as FlatsService  from '../services/FlatsService';
import { IFlatModelCreateModel, IFlatModelUpdateBodyModel, IFlatModelUpdateParamsModel } from '../models/FlatsModels';


export const RetrieveAllRecords:RequestHandler = async(req,res,next)=>{
    await FlatsService.RetrieveAllRecords(req,res,next);
}

export const RetrieveOneRecord:RequestHandler = async(req,res,next)=>{
    await FlatsService.RetrieveOneRecord(req,res,next);
}

export const CreateOneRecord: RequestHandler<unknown, unknown, IFlatModelCreateModel, unknown> = async(req, res, next)=>{
    await FlatsService.CreateOneRecord(req,res,next);
}
// export const CreateFlatDetailsArr: RequestHandler<unknown, unknown, IFlatModelCreateModel[], unknown> = async(req, res, next)=>{
//     await AllPropertiesService.CreateFlatDetailsArr(req,res,next);
// }


export const UpdateOneRecord: RequestHandler<IFlatModelUpdateParamsModel, unknown, IFlatModelUpdateBodyModel, unknown> = async(req, res, next)=>{
    await FlatsService.UpdateOneRecord(req,res,next);
}

export const DeleteOneRecord:RequestHandler = async(req,res,next)=>{
    await FlatsService.DeleteOneRecord(req,res,next);
}

