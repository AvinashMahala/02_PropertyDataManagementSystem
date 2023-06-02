import { InferSchemaType, Schema, model } from "mongoose";


const RentReceiptMetaDataDetailsSchemaMain = new Schema({
    rentReceiptMetaDataRefNm: {type:String, required:true, unique:true},
    logo: {type:String, required:true},
    bk_details_bk_name: {type:String, required:true},
    bk_details_bk_acc_number: {type:String, required:true},
    bk_details_bk_ifsc: {type:String, required:true},
    bk_details_acc_holder_name: {type:String, required:true},

    wallet_details_type: {type:String, required:true},
    wallet_details_phone_number: {type:String, required:true},
    wallet_details_name: {type:String, required:true},
    wallet_details_upi_id: {type:String, required:true},
    will_generate_direct_upi_payment_links: {type:Boolean, required:true},

    payment_qr_code: {type:String, required:true},
    payment_signature: {type:String, required:true},
    payment_watermark: {type:String, required:true},

},{ timestamps: true });

type IRentReceiptMetaDataDetailsModel = InferSchemaType<typeof RentReceiptMetaDataDetailsSchemaMain>;

export default model<IRentReceiptMetaDataDetailsModel>("RentReceiptMetaDataDetails", RentReceiptMetaDataDetailsSchemaMain);


export interface IRentReceiptMetaDataDetailsCreateModel {
    rentReceiptMetaDataRefNm: string;
    logo: string;
    bk_details_bk_name: string;
    bk_details_bk_acc_number: string;
    bk_details_bk_ifsc: string;
    bk_details_acc_holder_name: string;

    wallet_details_type: string;
    wallet_details_phone_number: string;
    wallet_details_name: string;
    wallet_details_upi_id: string;
    will_generate_direct_upi_payment_links: boolean;

    payment_qr_code: string;
    payment_signature: string;
    payment_watermark: string;
}


export interface IRentReceiptMetaDataDetailsUpdateParamsModel{
    rentReceiptMetaDataId:string;
}

export interface IRentReceiptMetaDataDetailsUpdateBodyModel{
    rentReceiptMetaDataRefNm: string;
    logo: string;
    bk_details_bk_name: string;
    bk_details_bk_acc_number: string;
    bk_details_bk_ifsc: string;
    bk_details_acc_holder_name: string;

    wallet_details_type: string;
    wallet_details_phone_number: string;
    wallet_details_name: string;
    wallet_details_upi_id: string;
    will_generate_direct_upi_payment_links: boolean;

    payment_qr_code: string;
    payment_signature: string;
    payment_watermark: string;
}