import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/assertIsDefined";

import ITenantMainModel, {
  ITenantCreateModel,
  ITenantUpdateParamsModel,
  ITenantUpdateBodyModel,
} from "../models/tenantModel";
import mongoose from "mongoose";

export const getAllTenants: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allTenants = await ITenantMainModel.find().exec();

    res.status(200).json(allTenants);
  } catch (error) {
    next(error);
  }
};

export const getOneTenant: RequestHandler = async (req, res, next) => {
  const tenantId = req.params.tenantId;
  try {
    const tenant = await ITenantMainModel.findById(tenantId).exec();
    res.status(200).json(tenant);
  } catch (error) {
    next(error);
  }
};

export const createTenant: RequestHandler<
  unknown,
  unknown,
  ITenantCreateModel,
  unknown
> = async (req, res, next) => {
  const body = req.body;

  try {
    const newTenant = await ITenantMainModel.create(body);

    res.status(201).json(newTenant);
  } catch (error) {
    next(error);
  }
};

export const updateTenant: RequestHandler<
  ITenantUpdateParamsModel,
  unknown,
  ITenantUpdateBodyModel,
  unknown
> = async (req, res, next) => {
  const paramsTenantId = req.params.TenantId;

  const body = req.body;

  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsTenantId)) {
      throw createHttpError(400, "Invalid Tenant ID!");
    }

    const updatedTenant = await ITenantMainModel.findByIdAndUpdate(
      paramsTenantId,
      body,
      { new: true }
    ).exec();

    res.status(200).json(updatedTenant);
  } catch (error) {
    next(error);
  }
};

export const deleteTenant: RequestHandler = async (req, res, next) => {
  const paramsTenantId = req.params.tenantId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsTenantId)) {
      throw createHttpError(400, "Invalid Tenant ID!");
    }

    const deletedTenant = await ITenantMainModel.findByIdAndDelete(
      paramsTenantId
    ).exec();
    res.status(200).json(deletedTenant);
  } catch (error) {
    next(error);
  }
};
