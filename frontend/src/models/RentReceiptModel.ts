
export interface IRentReceiptPropertyDetailsModel{
    propertyName:string;
    propertyAddress:string;
    contactNumber:string;
    emailId:string;
    ownerName:string;
}

export interface IRentReceiptBillDetailsModel{
    billNumber:string;
    roomNumber:string;
    tenantName:string;
}

export interface IRentReceiptEBillDetailsModel{
    meterNo:string;
    perUnitCost:string;
    oldReading:string;
    newReading:string;
    unitsConsumed:string;
    totalElecCost:string;

}

export interface IRentReceiptPaymentDetailsModel{
    totalRent:string;
    totalElectricity:string;
    oldBalance:string;
    expenseAdded:string;
    totalDueAmount:string;
    amountPaid:string;
    balance:string;
}


export interface IRentReceiptPaymentOptionsModel{
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
