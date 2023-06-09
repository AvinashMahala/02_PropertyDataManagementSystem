import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/AssertIsDefinedUtil";

import IRentMainModel, {
  IRentCreateModel,
  IRentUpdateParamsModel,
  IRentUpdateBodyModel,
} from "../models/RentalRecordsModels";
import mongoose from "mongoose";

export const RetrieveAllRecords: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allRents = await IRentMainModel.find().exec();

    res.status(200).json(allRents);
  } catch (error) {
    next(error);
  }
};

export const RetrieveOneRecord: RequestHandler = async (req, res, next) => {
  const rentId = req.params.rentId;
  try {
    const rent = await IRentMainModel.findById(rentId).exec();
    res.status(200).json(rent);
  } catch (error) {
    next(error);
  }
};

export const CreateOneRecord: RequestHandler<
  unknown,
  unknown,
  IRentCreateModel,
  unknown
> = async (req, res, next) => {
  const propertyId = req.body.propertyId;
  const flatId = req.body.flatId;
  const tenantId = req.body.tenantId;
  const rentStartDate = req.body.rentStartDate;
  const rentEndDate = req.body.rentEndDate;
  const rentAmount = req.body.rentAmount;

  const buildingMaintenanceAmount = req.body.buildingMaintenanceAmount;
  const previousBalance = req.body.previousBalance;
  const ebillPreviousMeterReading = req.body.ebillPreviousMeterReading;
  const ebillPreviousMeterReadingDate = req.body.ebillPreviousMeterReadingDate;
  const ebillNewMeterReading = req.body.ebillNewMeterReading;
  const ebillNewMeterReadingDate = req.body.ebillNewMeterReadingDate;
  const ebillMultiplier = req.body.ebillMultiplier;
  const ebillUnitsConsumed = req.body.ebillUnitsConsumed;
  const ebillAmount = req.body.ebillAmount;
  const totalAmount = req.body.totalAmount;
  const paidAmount = req.body.paidAmount;
  const currentBalance = req.body.currentBalance;
  const paymentDate = req.body.paymentDate;
  const paymentMode = req.body.paymentMode;
  const paymentReference = req.body.paymentReference;
  const paymentRemarks = req.body.paymentRemarks;
  const paymentStatus = req.body.paymentStatus;
  const paymentReceipt = req.body.paymentReceipt;
  const paymentReceiptDate = req.body.paymentReceiptDate;
  const paymentReceiptRemarks = req.body.paymentReceiptRemarks;
  const paymentReceiptStatus = req.body.paymentReceiptStatus;


  try {
    if (
      !propertyId ||
      !flatId ||
      !tenantId ||
      !rentStartDate ||
      !rentEndDate ||
      !rentAmount
    ) {
      throw createHttpError(400, "Parameters Missing!");
    }

    const newPropertyModel = await IRentMainModel.create({
      propertyId: propertyId,
      flatId: flatId,
      tenantId: tenantId,
      rentStartDate: rentStartDate,
      rentEndDate: rentEndDate,
      rentAmount: rentAmount,
      buildingMaintenanceAmount: buildingMaintenanceAmount,
      previousBalance: previousBalance,
      ebillPreviousMeterReading: ebillPreviousMeterReading,
      ebillPreviousMeterReadingDate: ebillPreviousMeterReadingDate,
      ebillNewMeterReading: ebillNewMeterReading,
      ebillNewMeterReadingDate: ebillNewMeterReadingDate,
      ebillMultiplier: ebillMultiplier,
      ebillUnitsConsumed: ebillUnitsConsumed,
      ebillAmount: ebillAmount,
      totalAmount: totalAmount,
      paidAmount: paidAmount,
      currentBalance: currentBalance,
      paymentDate: paymentDate,
      paymentMode: paymentMode,
      paymentReference: paymentReference,
      paymentRemarks: paymentRemarks,
      paymentStatus: paymentStatus,
      paymentReceipt: paymentReceipt,
      paymentReceiptDate: paymentReceiptDate,
      paymentReceiptRemarks: paymentReceiptRemarks,
      paymentReceiptStatus: paymentReceiptStatus,
    });

    res.status(201).json(newPropertyModel);
  } catch (error) {
    next(error);
  }
};

export const CreateMultipleRecords: RequestHandler<
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

export const UpdateOneRecord: RequestHandler<
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

export const DeleteOneRecord: RequestHandler = async (req, res, next) => {
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
