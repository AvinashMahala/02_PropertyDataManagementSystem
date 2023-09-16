import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/AssertIsDefinedUtil";

import IOwnerDetailsMainModel, {
  IOwnerDetailsCreateModel,
  IOwnerDetailsUpdateParamsModel,
  IOwnerDetailsUpdateBodyModel,
} from "../models/OwnersModels";
import mongoose from "mongoose";

export const RetrieveAllRecords: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  console.log("req.session:"+req.session);
  console.log("\nreq:"+req);
  console.log("\nreq.session.userId:"+req.session.userId);
  try {
    assertIsDefined(authenticatedUserId);
    const allOwnersDetails = await IOwnerDetailsMainModel.find().exec();

    res.status(200).json(allOwnersDetails);
  } catch (error) {
    next(error);
  }
};
export const RetrieveOneRecord: RequestHandler = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  try {
    const ownerDetails = await IOwnerDetailsMainModel.findById(ownerId).exec();
    res.status(200).json(ownerDetails);
  } catch (error) {
    next(error);
  }
};
export const CreateOneRecord: RequestHandler<
  unknown,
  unknown,
  IOwnerDetailsCreateModel,
  unknown
> = async (req, res, next) => {
  const userId = req.body.userId;
  const ownerName = req.body.ownerName;
  const ownerMobileNo = req.body.ownerMobileNo;
  const ownerEmail = req.body.ownerEmail;
  const ownerWebsite = req.body.ownerWebsite;
  try {
    if (
      !userId ||
      !ownerName ||
      !ownerMobileNo ||
      !ownerEmail ||
      !ownerWebsite
    ) {
      throw createHttpError(400, "Parameters Missing!");
    }
    const existingOwnerName = await IOwnerDetailsMainModel.findOne({
      ownerName: ownerName,
    }).exec();
    if (existingOwnerName) {
      throw createHttpError(
        409,
        "Owner Name already taken. Please choose a different one."
      );
    }
    const existingEmail = await IOwnerDetailsMainModel.findOne({
      ownerEmail: ownerEmail,
    }).exec();
    if (existingEmail) {
      throw createHttpError(
        409,
        "An Owner with this email address already exists. Please choose a different one."
      );
    }
    const newOwner = await IOwnerDetailsMainModel.create({
      userId: userId,
      ownerName: ownerName,
      ownerMobileNo: ownerMobileNo,
      ownerEmail: ownerEmail,
      ownerWebsite: ownerWebsite,
    });
    res.status(201).json(newOwner);
  } catch (error) {
    next(error);
  }
};
export const CreateMultipleRecords: RequestHandler<
  unknown,
  unknown,
  IOwnerDetailsCreateModel[],
  unknown
> = async (req, res, next) => {
  const ownersCreatedArr:IOwnerDetailsCreateModel[]=[];
  let newOwner:any;
  req.body.forEach(element => {
    const userId = element.userId;
    const ownerName = element.ownerName;
    const ownerMobileNo = element.ownerMobileNo;
    const ownerEmail = element.ownerEmail;
    const ownerWebsite = element.ownerWebsite;
    try {
      if (
        !userId ||
        !ownerName ||
        !ownerMobileNo ||
        !ownerEmail ||
        !ownerWebsite
      ) {
        throw createHttpError(400, "Parameters Missing!");
      }
      let existingOwnerName
      IOwnerDetailsMainModel.findOne({
        ownerName: ownerName,
      }).exec().then((result)=>{existingOwnerName=result;});
      if (existingOwnerName) {
        throw createHttpError(
          409,
          "Owner Name already taken. Please choose a different one."
        );
      }
      let existingEmail
      IOwnerDetailsMainModel.findOne({
        ownerEmail: ownerEmail,
      }).exec().then((result)=>{existingEmail=result;});
  
      if (existingEmail) {
        throw createHttpError(
          409,
          "An Owner with this email address already exists. Please choose a different one."
        );
      }
      IOwnerDetailsMainModel.create({
        userId: userId,
        ownerName: ownerName,
        ownerMobileNo: ownerMobileNo,
        ownerEmail: ownerEmail,
        ownerWebsite: ownerWebsite,
      }).then((result)=>{newOwner=result;});
      ownersCreatedArr.push(newOwner);
    } catch (error) {
      next(error);
    }
  });
  res.status(201).json(ownersCreatedArr);
};
export const UpdateOneRecord: RequestHandler<
  IOwnerDetailsUpdateParamsModel,
  unknown,
  IOwnerDetailsUpdateBodyModel,
  unknown
> = async (req, res, next) => {
  const paramsOwnerId = req.params.ownerId;
  const userId = req.body.userId;
  const ownerName = req.body.ownerName;
  const ownerMobileNo = req.body.ownerMobileNo;
  const ownerEmail = req.body.ownerEmail;
  const ownerWebsite = req.body.ownerWebsite;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsOwnerId)) {
      throw createHttpError(400, "Invalid Owner ID!");
    }
    const updatedOwner = await IOwnerDetailsMainModel.findByIdAndUpdate(
      paramsOwnerId,
      {
        userId: userId,
        ownerName: ownerName,
        ownerMobileNo: ownerMobileNo,
        ownerEmail: ownerEmail,
        ownerWebsite: ownerWebsite,
      },
      { new: true }
    ).exec();
    res.status(200).json(updatedOwner);
  } catch (error) {
    next(error);
  }
};
export const DeleteOneRecord: RequestHandler = async (req, res, next) => {
  const paramsOwnerId = req.params.ownerId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsOwnerId)) {
      throw createHttpError(400, "Invalid Owner ID!");
    }
    const deletedOwner = await IOwnerDetailsMainModel.findByIdAndDelete(
      paramsOwnerId
    ).exec();
    res.status(200).json(deletedOwner);
  } catch (error) {
    next(error);
  }
};
