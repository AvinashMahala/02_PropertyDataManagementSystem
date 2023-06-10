import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/AssertIsDefinedUtil";

import IPropertyModelMainModel, {
  IPropertyModelCreateModel,
  IPropertyModelUpdateParamsModel,
  IPropertyModelUpdateBodyModel,
} from "../models/PropertiesModels";
import mongoose from "mongoose";

export const RetrieveAllRecords: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allPropertyModels = await IPropertyModelMainModel.find().exec();

    res.status(200).json(allPropertyModels);
  } catch (error) {
    next(error);
  }
};

export const RetrieveOneRecord: RequestHandler = async (req, res, next) => {
  const propertyId = req.params.propertyId;
  try {
    const propertyModel = await IPropertyModelMainModel.findById(propertyId).exec();
    res.status(200).json(propertyModel);
  } catch (error) {
    next(error);
  }
};

export const CreateOneRecord: RequestHandler<
  unknown,
  unknown,
  IPropertyModelCreateModel,
  unknown
> = async (req, res, next) => {
  const ownerId = req.body.ownerId;
  const rentReceiptMetaDataId = req.body.rentReceiptMetaDataId;
  const propertyName = req.body.propertyName;
  const propertyType = req.body.propertyType;
  const propertyAddress = req.body.propertyAddress;
  const propertyTakeRentOf = req.body.propertyTakeRentOf;

  try {
    if (
      !ownerId ||
      !rentReceiptMetaDataId ||
      !propertyName ||
      !propertyType ||
      !propertyAddress ||
      !propertyTakeRentOf
    ) {
      throw createHttpError(400, "Parameters Missing!");
    }

    const newPropertyModel = await IPropertyModelMainModel.create({
      ownerId: ownerId,
      rentReceiptMetaDataId: rentReceiptMetaDataId,
      propertyName: propertyName,
      propertyType: propertyType,
      propertyAddress: propertyAddress,
      propertyTakeRentOf: propertyTakeRentOf,
    });

    res.status(201).json(newPropertyModel);
  } catch (error) {
    next(error);
  }
};

export const UpdateOneRecord: RequestHandler<
  IPropertyModelUpdateParamsModel,
  unknown,
  IPropertyModelUpdateBodyModel,
  unknown
> = async (req, res, next) => {
  const paramsPropertyId = req.params.propertyId;

  const ownerId = req.body.ownerId;
  const rentReceiptMetaDataId = req.body.rentReceiptMetaDataId;
  const propertyName = req.body.propertyName;
  const propertyType = req.body.propertyType;
  const propertyAddress = req.body.propertyAddress;
  const propertyTakeRentOf = req.body.propertyTakeRentOf;

  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsPropertyId)) {
      throw createHttpError(400, "Invalid Property ID!");
    }

    const updatedPropertyModel = await IPropertyModelMainModel.findByIdAndUpdate(
      paramsPropertyId,
      {
        ownerId: ownerId,
        rentReceiptMetaDataId: rentReceiptMetaDataId,
        propertyName: propertyName,
        propertyType: propertyType,
        propertyAddress: propertyAddress,
        propertyTakeRentOf: propertyTakeRentOf,
      },
      { new: true }
    ).exec();

    res.status(200).json(updatedPropertyModel);
  } catch (error) {
    next(error);
  }
};

export const DeleteOneRecord: RequestHandler = async (req, res, next) => {
  const paramsPropertyId = req.params.propertyId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsPropertyId)) {
      throw createHttpError(400, "Invalid Property ID!");
    }

    const deletedPropertyModel = await IPropertyModelMainModel.findByIdAndDelete(
      paramsPropertyId
    ).exec();
    res.status(200).json(deletedPropertyModel);
  } catch (error) {
    next(error);
  }
};
