export interface IRentReceiptMetaDataDetailsViewModel{
    _id:string;
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
    createdAt:Date;
    updatedAt:Date;
}

export interface IRentReceiptMetaDataDetailsInputModel{
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