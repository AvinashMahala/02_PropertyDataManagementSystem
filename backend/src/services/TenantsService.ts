import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/AssertIsDefinedUtil";

import ITenantMainModel, {
  ITenantCreateModel,
  ITenantUpdateParamsModel,
  ITenantUpdateBodyModel,
} from "../models/TenantsModels";
import mongoose from "mongoose";

export const RetrieveAllRecords: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allTenants = await ITenantMainModel.find().exec();

    res.status(200).json(allTenants);
  } catch (error) {
    next(error);
  }
};

export const RetrieveOneRecord: RequestHandler = async (req, res, next) => {
  const tenantId = req.params.tenantId;
  try {
    const tenant = await ITenantMainModel.findById(tenantId).exec();
    res.status(200).json(tenant);
  } catch (error) {
    next(error);
  }
};

export const CreateOneRecord: RequestHandler<
  unknown,
  unknown,
  ITenantCreateModel,
  unknown
> = async (req, res, next) => {
  const flatId=req.body.flatId;
  const Photo=req.body.Photo;
  const Salutation=req.body.Salutation;
  const Name=req.body.Name;
  const Profession=req.body.Profession;
  const NoOfPeople=req.body.NoOfPeople;
  const NativeAddress=req.body.NativeAddress;
  const WorkAddress=req.body.WorkAddress;
  const PrimaryPhNo=req.body.PrimaryPhNo;
  const SecondaryPhNo=req.body.SecondaryPhNo;
  const Email=req.body.Email;
  const DepositAmount=req.body.DepositAmount;
  const DepositPaidDate=req.body.DepositPaidDate;
  const Balance=req.body.Balance;
  const MoveInDate=req.body.MoveInDate;
  const StartRentFromDate=req.body.StartRentFromDate;
  const LeaseType=req.body.LeaseType;
  const FixedLeaseStartDate=req.body.FixedLeaseStartDate;
  const FixedLeasePeriod=req.body.FixedLeasePeriod;
  const FixedLeasePeriodType=req.body.FixedLeasePeriodType;
  const EmergencyContactName=req.body.EmergencyContactName;
  const EmergencyContactNo=req.body.EmergencyContactNo;
  const EmergencyContactRelation=req.body.EmergencyContactRelation;
  const ExtraService=req.body.ExtraService;



  try {
    if (
      !flatId ||
      !Salutation ||
      !Name ||
      !Profession ||
      !NoOfPeople ||
      !NativeAddress ||
      !WorkAddress ||
      !PrimaryPhNo ||
      !Email ||
      !DepositAmount ||
      !DepositPaidDate ||
      !Balance ||
      !MoveInDate ||
      !StartRentFromDate ||
      !LeaseType ||
      !EmergencyContactName ||
      !EmergencyContactNo ||
      !EmergencyContactRelation ||
      !ExtraService
    ) {
      throw createHttpError(400, "Parameters Missing!");
    }

    const newTenant = await ITenantMainModel.create({
      flatId:flatId,
      Photo:Photo,
      Salutation:Salutation,
      Name:Name,
      Profession:Profession,
      NoOfPeople:NoOfPeople,
      NativeAddress:NativeAddress,
      WorkAddress:WorkAddress,
      PrimaryPhNo:PrimaryPhNo,
      SecondaryPhNo:SecondaryPhNo,
      Email:Email,
      DepositAmount:DepositAmount,
      DepositPaidDate:DepositPaidDate,
      Balance:Balance,
      MoveInDate:MoveInDate,
      StartRentFromDate:StartRentFromDate,
      LeaseType:LeaseType,
      FixedLeaseStartDate:FixedLeaseStartDate,
      FixedLeasePeriod:FixedLeasePeriod,
      FixedLeasePeriodType:FixedLeasePeriodType,
      EmergencyContactName:EmergencyContactName,
      EmergencyContactNo:EmergencyContactNo,
      EmergencyContactRelation:EmergencyContactRelation,
      ExtraService:ExtraService,
    });

    res.status(201).json(newTenant);
  } catch (error) {
    next(error);
  }
};

export const UpdateOneRecord: RequestHandler<
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

export const DeleteOneRecord: RequestHandler = async (req, res, next) => {
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
