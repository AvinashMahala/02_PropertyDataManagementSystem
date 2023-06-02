import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/assertIsDefined";

import IFlatModelMainModel, {
  IFlatModelCreateModel,
  IFlatModelUpdateParamsModel,
  IFlatModelUpdateBodyModel,
} from "../models/flatModel";
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
  const flat = req.body;

  try {
    const newFlat = await IFlatModelMainModel.create(flat);

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
