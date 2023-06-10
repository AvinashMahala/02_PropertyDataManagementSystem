
import * as ReceiptGenUtility from "./../models/RentReceiptModel";
import * as PropertiesModel from "./../models/allPropertiesModel";

export function RetrievePropertyDetails(rowValue:any,propertiesArr:PropertiesModel.IPropertyDetailsViewModel[]):ReceiptGenUtility.IRentReceiptPropertyDetailsModel{
    if(rowValue!==undefined){
        return {
            propertyName:propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.propertyName,
            propertyAddress:propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.propertyAddress,
            contactNumber:"",
            emailId:"",
            ownerName:""
        };
    }
    else{
        return {
            propertyName:"",
            propertyAddress:"",
            contactNumber:"",
            emailId:"",
            ownerName:""
        };
    }
    
}
export function RetrieveBillDetails(rowValue:any,propertiesArr:any):ReceiptGenUtility.IRentReceiptBillDetailsModel{
    return {
        billNumber:"",
        roomNumber:"",
        tenantName:""
    };
}
export function RetrieveElectricityDetails(rowValue:any,propertiesArr:any):ReceiptGenUtility.IRentReceiptEBillDetailsModel{
    return {
        meterNo:"",
        perUnitCost:"",
        oldReading:"",
        newReading:"",
        unitsConsumed:"",
        totalElecCost:""
    };
}
export function RetrievePaymentDetails(rowValue:any,propertiesArr:any):ReceiptGenUtility.IRentReceiptPaymentDetailsModel{
    return {
        totalRent:"",
        totalElectricity:"",
        oldBalance:"",
        expenseAdded:"",
        totalDueAmount:"",
        amountPaid:"",
        balance:""
    };
}
export function RetrievePaymentOptionDetails(rowValue:any,propertiesArr:any):ReceiptGenUtility.IRentReceiptPaymentOptionsModel{
    return {
        rentReceiptMetaDataRefNm: "",
        logo: "",
        bk_details_bk_name: "",
        bk_details_bk_acc_number: "",
        bk_details_bk_ifsc: "",
        bk_details_acc_holder_name: "",
        wallet_details_type: "",
        wallet_details_phone_number: "",
        wallet_details_name: "",
        wallet_details_upi_id: "",
        will_generate_direct_upi_payment_links: false,
        payment_qr_code: "",
        payment_signature: "",
        payment_watermark: ""
    };
}