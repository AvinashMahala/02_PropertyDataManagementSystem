import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/assertIsDefined";

import IRentMainModel, {
  IRentCreateModel,
  IRentUpdateParamsModel,
  IRentUpdateBodyModel,
} from "../models/RentalRecordsModels";
import mongoose from "mongoose";

export const getAllRents: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allRents = await IRentMainModel.find().exec();

    res.status(200).json(allRents);
  } catch (error) {
    next(error);
  }
};

export const getOneRent: RequestHandler = async (req, res, next) => {
  const rentId = req.params.rentId;
  try {
    const rent = await IRentMainModel.findById(rentId).exec();
    res.status(200).json(rent);
  } catch (error) {
    next(error);
  }
};

export const createRent: RequestHandler<
  unknown,
  unknown,
  IRentCreateModel,
  unknown
> = async (req, res, next) => {
  try {
    const newRent = await IRentMainModel.create(req.body);
    res.status(201).json(newRent);
  } catch (error) {
    next(error);
  }
};

export const createRentArr: RequestHandler<
  unknown,
  unknown,
  IRentCreateModel[],
  unknown
> = async (req, res, next) => {
  const rentsCreatedArr: IRentCreateModel[] = [];
  let newRent: any;
  req.body.forEach(async (element: IRentCreateModel) => {
    try {
      newRent = await IRentMainModel.create(element);
      rentsCreatedArr.push(newRent);
    } catch (error) {
      next(error);
    }
  });
  res.status(201).json(rentsCreatedArr);
};

export const updateRent: RequestHandler<
  IRentUpdateParamsModel,
  unknown,
  IRentUpdateBodyModel,
  unknown
> = async (req, res, next) => {
  const paramsRentId = req.params.rentId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsRentId)) {
      throw createHttpError(400, "Invalid Rent ID!");
    }
    const updatedRent = await IRentMainModel.findByIdAndUpdate(
      paramsRentId,
      req.body,
      { new: true }
    ).exec();
    res.status(200).json(updatedRent);
  } catch (error) {
    next(error);
  }
};

export const deleteRent: RequestHandler = async (req, res, next) => {
  const paramsRentId = req.params.rentId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsRentId)) {
      throw createHttpError(400, "Invalid Rent ID!");
    }
    const deletedRent = await IRentMainModel.findByIdAndDelete(
      paramsRentId
    ).exec();
    res.status(200).json(deletedRent);
  } catch (error) {
    next(error);
  }
};
