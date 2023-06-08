import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { assertIsDefined } from "../util/AssertIsDefinedUtil";

import IRentReceiptMetaDataDetailsMainModel, {
  IRentReceiptMetaDataDetailsCreateModel,
  IRentReceiptMetaDataDetailsUpdateParamsModel,
  IRentReceiptMetaDataDetailsUpdateBodyModel,
} from "../models/PaymentMetaDataModels";
import mongoose from "mongoose";

export const getAllRentReceiptMetaDataDetails: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    const allRentReceiptMetaDataDetails = await IRentReceiptMetaDataDetailsMainModel.find().exec();

    res.status(200).json(allRentReceiptMetaDataDetails);
  } catch (error) {
    next(error);
  }
};

export const getOneRentReceiptMetaDataDetails: RequestHandler = async (req, res, next) => {
  const rentReceiptMetaDataId = req.params.rentReceiptMetaDataId;
  try {
    const rentReceiptMetaDataDetails = await IRentReceiptMetaDataDetailsMainModel.findById(rentReceiptMetaDataId).exec();
    res.status(200).json(rentReceiptMetaDataDetails);
  } catch (error) {
    next(error);
  }
};

export const createRentReceiptMetaDataDetails: RequestHandler<
  unknown,
  unknown,
  IRentReceiptMetaDataDetailsCreateModel,
  unknown
> = async (req, res, next) => {
    const rentReceiptMetaDataRefNm = req.body.rentReceiptMetaDataRefNm;
    const logo = req.body.logo;
    const bk_details_bk_name = req.body.bk_details_bk_name;
    const bk_details_bk_acc_number = req.body.bk_details_bk_acc_number;
    const bk_details_bk_ifsc = req.body.bk_details_bk_ifsc;
    const bk_details_acc_holder_name = req.body.bk_details_acc_holder_name;

    const wallet_details_type = req.body.wallet_details_type;
    const wallet_details_phone_number = req.body.wallet_details_phone_number;
    const wallet_details_name = req.body.wallet_details_name;
    const wallet_details_upi_id = req.body.wallet_details_upi_id;
    const will_generate_direct_upi_payment_links = req.body.will_generate_direct_upi_payment_links;
    
    const payment_qr_code = req.body.payment_qr_code;
    const payment_signature = req.body.payment_signature;
    const payment_watermark = req.body.payment_watermark;


  try {
    if (
      typeof rentReceiptMetaDataRefNm ==undefined ||
      typeof logo ==undefined ||
      typeof bk_details_bk_name ==undefined ||
      typeof bk_details_bk_acc_number ==undefined ||
      typeof bk_details_bk_ifsc ==undefined ||
      typeof bk_details_acc_holder_name ==undefined ||
      typeof wallet_details_type ==undefined ||
      typeof wallet_details_phone_number ==undefined ||
      typeof wallet_details_name ==undefined ||
      typeof wallet_details_upi_id ==undefined ||
      typeof will_generate_direct_upi_payment_links ==undefined ||
      typeof payment_qr_code ==undefined ||
      typeof payment_signature ==undefined ||
      typeof payment_watermark ==undefined
    ) {
      throw createHttpError(400, "Parameters Missing!");
    }

    const existingRentReceiptMetaDataRefNm = await IRentReceiptMetaDataDetailsMainModel.findOne({
        rentReceiptMetaDataRefNm: rentReceiptMetaDataRefNm,
    }).exec();

    if (existingRentReceiptMetaDataRefNm) {
      throw createHttpError(
        409,
        "Rent Receipt Meta Data Reference Name already exists. Please choose a different one."
      );
    }

    const newRentReceiptMetaData = await IRentReceiptMetaDataDetailsMainModel.create({
        rentReceiptMetaDataRefNm: rentReceiptMetaDataRefNm,
        logo: logo,
        bk_details_bk_name: bk_details_bk_name,
        bk_details_bk_acc_number: bk_details_bk_acc_number,
        bk_details_bk_ifsc: bk_details_bk_ifsc,
        bk_details_acc_holder_name: bk_details_acc_holder_name,
        wallet_details_type: wallet_details_type,
        wallet_details_phone_number: wallet_details_phone_number,
        wallet_details_name: wallet_details_name,
        wallet_details_upi_id: wallet_details_upi_id,
        will_generate_direct_upi_payment_links: will_generate_direct_upi_payment_links,
        payment_qr_code: payment_qr_code,
        payment_signature: payment_signature,
        payment_watermark: payment_watermark,
    });

    res.status(201).json(newRentReceiptMetaData);
  } catch (error) {
    next(error);
  }
};


export const createRentReceiptMetaDataDetailsArr: RequestHandler<
  unknown,
  unknown,
  IRentReceiptMetaDataDetailsCreateModel[],
  unknown
> = async (req, res, next) => {

  const rentReceiptMetaDataDetailsCreatedArr:IRentReceiptMetaDataDetailsCreateModel[]=[];
  let newRentReceiptMetaData:any;

  req.body.forEach(element => {//Need to add Exception Handling for req.body.forEach is not a function
    const rentReceiptMetaDataRefNm = element.rentReceiptMetaDataRefNm;
    const logo = element.logo;
    const bk_details_bk_name = element.bk_details_bk_name;
    const bk_details_bk_acc_number = element.bk_details_bk_acc_number;
    const bk_details_bk_ifsc = element.bk_details_bk_ifsc;
    const bk_details_acc_holder_name = element.bk_details_acc_holder_name;

    const wallet_details_type = element.wallet_details_type;
    const wallet_details_phone_number = element.wallet_details_phone_number;
    const wallet_details_name = element.wallet_details_name;
    const wallet_details_upi_id = element.wallet_details_upi_id;
    const will_generate_direct_upi_payment_links = element.will_generate_direct_upi_payment_links;

    const payment_qr_code = element.payment_qr_code;
    const payment_signature = element.payment_signature;
    const payment_watermark = element.payment_watermark;

    try {
      if (
        !rentReceiptMetaDataRefNm ||
        !logo ||
        !bk_details_bk_name ||
        !bk_details_bk_acc_number ||
        !bk_details_bk_ifsc ||
        !bk_details_acc_holder_name ||
        !wallet_details_type ||
        !wallet_details_phone_number ||
        !wallet_details_name ||
        !wallet_details_upi_id ||
        !will_generate_direct_upi_payment_links ||
        !payment_qr_code ||
        !payment_signature ||
        !payment_watermark
      ) {
        throw createHttpError(400, "Parameters Missing!");
      }
      let existingRentReceiptMetaDataRefNm
      IRentReceiptMetaDataDetailsMainModel.findOne({
        rentReceiptMetaDataRefNm: rentReceiptMetaDataRefNm,
      }).exec().then((result)=>{existingRentReceiptMetaDataRefNm=result;});
  
      if (existingRentReceiptMetaDataRefNm) {
        throw createHttpError(
          409,
          "Rent Receipt Meta Data Name already taken. Please choose a different one."
        );
      }


      IRentReceiptMetaDataDetailsMainModel.create({
        rentReceiptMetaDataRefNm: rentReceiptMetaDataRefNm,
        logo: logo,
        bk_details_bk_name: bk_details_bk_name,
        bk_details_bk_acc_number: bk_details_bk_acc_number,
        bk_details_bk_ifsc: bk_details_bk_ifsc,
        bk_details_acc_holder_name: bk_details_acc_holder_name,
        wallet_details_type: wallet_details_type,
        wallet_details_phone_number: wallet_details_phone_number,
        wallet_details_name: wallet_details_name,
        wallet_details_upi_id: wallet_details_upi_id,
        will_generate_direct_upi_payment_links: will_generate_direct_upi_payment_links,
        payment_qr_code: payment_qr_code,
        payment_signature: payment_signature,
        payment_watermark: payment_watermark,

      }).then((result)=>{newRentReceiptMetaData=result;});

      rentReceiptMetaDataDetailsCreatedArr.push(newRentReceiptMetaData);

      
      
    } catch (error) {
      next(error);
    }
  });

  res.status(201).json(rentReceiptMetaDataDetailsCreatedArr);

};

export const updateRentReceiptMetaDataDetails: RequestHandler<
  IRentReceiptMetaDataDetailsUpdateParamsModel,
  unknown,
  IRentReceiptMetaDataDetailsUpdateBodyModel,
  unknown
> = async (req, res, next) => {
  const paramsRentReceiptMetaDataId = req.params.rentReceiptMetaDataId;

    const rentReceiptMetaDataRefNm = req.body.rentReceiptMetaDataRefNm;
    const logo = req.body.logo;
    const bk_details_bk_name = req.body.bk_details_bk_name;
    const bk_details_bk_acc_number = req.body.bk_details_bk_acc_number;
    const bk_details_bk_ifsc = req.body.bk_details_bk_ifsc;
    const bk_details_acc_holder_name = req.body.bk_details_acc_holder_name;

    const wallet_details_type = req.body.wallet_details_type;
    const wallet_details_phone_number = req.body.wallet_details_phone_number;
    const wallet_details_name = req.body.wallet_details_name;
    const wallet_details_upi_id = req.body.wallet_details_upi_id;
    const will_generate_direct_upi_payment_links = req.body.will_generate_direct_upi_payment_links;

    const payment_qr_code = req.body.payment_qr_code;
    const payment_signature = req.body.payment_signature;
    const payment_watermark = req.body.payment_watermark;


  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsRentReceiptMetaDataId)) {
      throw createHttpError(400, "Invalid Rent Receipt Meta Data Details ID!");
    }

    const updatedRentReceiptMetaData = await IRentReceiptMetaDataDetailsMainModel.findByIdAndUpdate(
      paramsRentReceiptMetaDataId,
      {
        rentReceiptMetaDataRefNm: rentReceiptMetaDataRefNm,
        logo: logo,
        bk_details_bk_name: bk_details_bk_name,
        bk_details_bk_acc_number: bk_details_bk_acc_number,
        bk_details_bk_ifsc: bk_details_bk_ifsc,
        bk_details_acc_holder_name: bk_details_acc_holder_name,
        wallet_details_type: wallet_details_type,
        wallet_details_phone_number: wallet_details_phone_number,
        wallet_details_name: wallet_details_name,
        wallet_details_upi_id: wallet_details_upi_id,
        will_generate_direct_upi_payment_links: will_generate_direct_upi_payment_links,
        payment_qr_code: payment_qr_code,
        payment_signature: payment_signature,
        payment_watermark: payment_watermark,
      },
      { new: true }
    ).exec();

    res.status(200).json(updatedRentReceiptMetaData);
  } catch (error) {
    next(error);
  }
};

export const deleteRentReceiptMetaDataDetails: RequestHandler = async (req, res, next) => {
  const paramsRentReceiptMetaDataId = req.params.rentReceiptMetaDataId;
  const authenticatedUserId = req.session.userId;
  try {
    assertIsDefined(authenticatedUserId);
    if (!mongoose.isValidObjectId(paramsRentReceiptMetaDataId)) {
      throw createHttpError(400, "Invalid Rent Receipt Meta Data Details ID!");
    }

    const deletedRentReceiptMetaData = await IRentReceiptMetaDataDetailsMainModel.findByIdAndDelete(
        paramsRentReceiptMetaDataId
    ).exec();
    res.status(200).json(deletedRentReceiptMetaData);
  } catch (error) {
    next(error);
  }
};
