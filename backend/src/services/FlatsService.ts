import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/assertIsDefined";

import IFlatModelMainModel, {
  IFlatModelCreateModel,
  IFlatModelUpdateParamsModel,
  IFlatModelUpdateBodyModel,
} from "../models/FlatsModels";
import mongoose from "mongoose";

export const getAllFlats: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allFlats = await IFlatModelMainModel.find().exec();

    res.status(200).json(allFlats);
  } catch (error) {
    next(error);
  }
};

export const getOneFlat: RequestHandler = async (req, res, next) => {
  const flatId = req.params.flatId;
  try {
    const flat = await IFlatModelMainModel.findById(flatId).exec();
    res.status(200).json(flat);
  } catch (error) {
    next(error);
  }
};

export const createFlat: RequestHandler<
  unknown,
  unknown,
  IFlatModelCreateModel,
  unknown
> = async (req, res, next) => {
  const propertyId=req.body.propertyId;
  const roomName=req.body.roomName;
  const roomRent=req.body.roomRent;
  const roomColorSeparator=req.body.roomColorSeparator;
  const roomType=req.body.roomType;
  const roomRemarks=req.body.roomRemarks;
  const rentCalcMethod=req.body.rentCalcMethod;
  const electricityBillType=req.body.electricityBillType;
  const electricityBillMeterName=req.body.electricityBillMeterName;
  const electricityBillPerUnitCost=req.body.electricityBillPerUnitCost;
  const electricityBillMeterReading=req.body.electricityBillMeterReading;
  const electricityBillFixedAmtCost=req.body.electricityBillFixedAmtCost;
  const waterBillType=req.body.waterBillType;
  const waterBillMeterName=req.body.waterBillMeterName;
  const waterBillPerUnitCost=req.body.waterBillPerUnitCost;
  const waterBillMeterReading=req.body.waterBillMeterReading;
  const waterBillFixedAmtCost=req.body.waterBillFixedAmtCost;



  try {
    if (
      !propertyId ||
      !roomName ||
      !roomRent ||
      !roomColorSeparator ||
      !roomType ||
      !rentCalcMethod ||
      !electricityBillType ||
      !waterBillType
    ) {
      throw createHttpError(400, "Parameters Missing!");
    }

    const newFlat = await IFlatModelMainModel.create({
      propertyId:propertyId,
      roomName:roomName,
      roomRent:roomRent,
      roomColorSeparator:roomColorSeparator,
      roomType:roomType,
      roomRemarks:roomRemarks,
      rentCalcMethod:rentCalcMethod,
      electricityBillType:electricityBillType,
      electricityBillMeterName:electricityBillMeterName,
      electricityBillPerUnitCost:electricityBillPerUnitCost,
      electricityBillMeterReading:electricityBillMeterReading,
      electricityBillFixedAmtCost:electricityBillFixedAmtCost,
      waterBillType:waterBillType,
      waterBillMeterName:waterBillMeterName,
      waterBillPerUnitCost:waterBillPerUnitCost,
      waterBillMeterReading:waterBillMeterReading,
      waterBillFixedAmtCost:waterBillFixedAmtCost,
    });

    res.status(201).json(newFlat);
  } catch (error) {
    next(error);
  }
};

export const updateFlat: RequestHandler<
  IFlatModelUpdateParamsModel,
  unknown,
  IFlatModelUpdateBodyModel,
  unknown
> = async (req, res, next) => {
  const paramsFlatId = req.params.FlatId;
  const flat = req.body;

  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsFlatId)) {
      throw createHttpError(400, "Invalid Flat ID!");
    }

    const updatedFlat = await IFlatModelMainModel.findByIdAndUpdate(
      paramsFlatId,
      flat,
      { new: true }
    ).exec();

    res.status(200).json(updatedFlat);
  } catch (error) {
    next(error);
  }
};

export const deleteFlat: RequestHandler = async (req, res, next) => {
  const paramsFlatId = req.params.flatId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsFlatId)) {
      throw createHttpError(400, "Invalid Flat ID!");
    }

    const deletedFlat = await IFlatModelMainModel.findByIdAndDelete(
      paramsFlatId
    ).exec();
    res.status(200).json(deletedFlat);
  } catch (error) {
    next(error);
  }
};
