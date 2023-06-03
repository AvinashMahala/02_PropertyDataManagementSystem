import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/assertIsDefined";

import IMaintenanceRequestsMainModel, {
  IMaintenanceRequestsCreateModel,
  IMaintenanceRequestsUpdateParamsModel,
  IMaintenanceRequestsUpdateBodyModel,
} from "../models/maintenanceRequestsModel";
import mongoose from "mongoose";

export const getAllMaintenanceRequests: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allMaintenanceRequests = await IMaintenanceRequestsMainModel.find().exec();
    res.status(200).json(allMaintenanceRequests);
  } catch (error) {
    next(error);
  }
};

export const getOneMaintenanceRequest: RequestHandler = async (req, res, next) => {
  const maintenanceRequestId = req.params.maintenanceRequestId;
  try {
    const maintenanceRequest = await IMaintenanceRequestsMainModel.findById(maintenanceRequestId).exec();
    res.status(200).json(maintenanceRequest);
  } catch (error) {
    next(error);
  }
};

export const createMaintenanceRequest: RequestHandler<
  unknown,
  unknown,
  IMaintenanceRequestsCreateModel,
  unknown
> = async (req, res, next) => {
  const {
    flatId,
    tenantId,
    startDate,
    endDate,
    priority,
    amount,
    status,
    tenantNotes,
    ownerNotes
  } = req.body;

  try {
    if (
      !flatId ||
      !tenantId ||
      !startDate ||
      !endDate ||
      !priority ||
      !amount ||
      !status ||
      !tenantNotes ||
      !ownerNotes
    ) {
      throw createHttpError(400, "Parameters Missing!");
    }

    const newMaintenanceRequest = await IMaintenanceRequestsMainModel.create(req.body);
    res.status(201).json(newMaintenanceRequest);
  } catch (error) {
    next(error);
  }
};

export const updateMaintenanceRequest: RequestHandler<
  IMaintenanceRequestsUpdateParamsModel,
  unknown,
  IMaintenanceRequestsUpdateBodyModel,
  unknown
> = async (req, res, next) => {
  const maintenanceRequestId = req.params.maintenanceRequestId;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(maintenanceRequestId)) {
      throw createHttpError(400, "Invalid Maintenance Request ID!");
    }
    const updatedMaintenanceRequest = await IMaintenanceRequestsMainModel.findByIdAndUpdate(
      maintenanceRequestId,
      req.body,
      { new: true }
    ).exec();
    res.status(200).json(updatedMaintenanceRequest);
  } catch (error) {
    next(error);
  }
};

export const deleteMaintenanceRequest: RequestHandler = async (req, res, next) => {
  const maintenanceRequestId = req.params.maintenanceRequestId;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(maintenanceRequestId)) {
      throw createHttpError(400, "Invalid Maintenance Request ID!");
    }
    const deletedMaintenanceRequest = await IMaintenanceRequestsMainModel.findByIdAndDelete(
      maintenanceRequestId
    ).exec();
    res.status(200).json(deletedMaintenanceRequest);
  } catch (error) {
    next(error);
  }
};