import * as ReceiptGenUtility from "./../models/RentReceiptModel";
import * as OwnersModel from "./../models/ownerDetails";
import * as PaymentRecordMetaDataModel from "./../models/rentReceiptMetaDataDetails";
import * as PropertiesModel from "./../models/allPropertiesModel";
import * as RoomsModel from "./../models/flatModel";
import * as TenantModel from "./../models/tenantModel";
import * as FlatsModel from "./../models/flatModel";
import * as PaymentMetaDataModel from "./../models/rentReceiptMetaDataDetails";

export function RetrievePropertyDetails(rowValue:any,propertiesArr:PropertiesModel.IPropertyDetailsViewModel[],ownersArr:OwnersModel.IOwnerDetailsViewModel[]):ReceiptGenUtility.IRentReceiptPropertyDetailsModel{
        
    if(rowValue){
        return {
            propertyName:propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.propertyName,
            propertyAddress:propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.propertyAddress,
            contactNumber:ownersArr.filter((owner)=>owner._id===propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.ownerId)[0].ownerMobileNo,
            emailId:ownersArr.filter((owner)=>owner._id===propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.ownerId)[0].ownerEmail,
            ownerName:ownersArr.filter((owner)=>owner._id===propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.ownerId)[0].ownerName
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
export function RetrieveBillDetails(rowValue:any,flatsArr:FlatsModel.IFlatViewModel[],tenantsArr:TenantModel.ITenantViewModel[]):ReceiptGenUtility.IRentReceiptBillDetailsModel{
    if(rowValue){
        return {
            billNumber:rowValue.original._id,
            roomNumber:flatsArr.filter((room)=>room._id===rowValue.original.flatId)[0].roomName,
            tenantName:tenantsArr.filter((tenant)=>tenant._id===rowValue.original.tenantId)[0].Name
        };
    }
    else{
        return {
            billNumber:"",
            roomNumber:"",
            tenantName:""
        };
    }   
}
export function RetrieveElectricityDetails(rowValue:any,flatsArr:FlatsModel.IFlatViewModel[]):ReceiptGenUtility.IRentReceiptEBillDetailsModel{
    if(rowValue){
        return {
            meterNo:flatsArr.filter((room)=>room._id===rowValue.original.flatId)[0].electricityBillMeterName,
            perUnitCost:flatsArr.filter((room)=>room._id===rowValue.original.flatId)[0].electricityBillPerUnitCost.toString(),
            oldReading:rowValue.original.ebillPreviousMeterReading,
            newReading:rowValue.original.ebillNewMeterReading,
            unitsConsumed:rowValue.original.ebillUnitsConsumed,
            totalElecCost:rowValue.original.ebillAmount
        };
    }
    else{
        return {
            meterNo:"",
            perUnitCost:"",
            oldReading:"",
            newReading:"",
            unitsConsumed:"",
            totalElecCost:""
        };
    }
   
}
export function RetrievePaymentDetails(rowValue:any):ReceiptGenUtility.IRentReceiptPaymentDetailsModel{
    if(rowValue){
        return {
            totalRent:rowValue.original.rentAmount,
            totalElectricity:rowValue.original.ebillAmount,
            oldBalance:rowValue.original.previousBalance,
            expenseAdded:"",
            totalDueAmount:rowValue.original.totalAmount,
            amountPaid:rowValue.original.paidAmount,
            balance:rowValue.original.currentBalance
        };
    }
    else{
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
    
}
export function RetrievePaymentOptionDetails(rowValue:any,propertiesArr:PropertiesModel.IPropertyDetailsViewModel[],paymentMetaDataArr:PaymentMetaDataModel.IRentReceiptMetaDataDetailsViewModel[]):ReceiptGenUtility.IRentReceiptPaymentOptionsModel{
    if(rowValue){
        let paymentMetaDataId:string=propertiesArr.filter((prop)=>prop._id===rowValue.original.propertyId)[0]?.rentReceiptMetaDataId;

        if(paymentMetaDataId){
            return {
                rentReceiptMetaDataRefNm: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].rentReceiptMetaDataRefNm,
                logo: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].logo,
                bk_details_bk_name: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].bk_details_bk_name,
                bk_details_bk_acc_number: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].bk_details_bk_acc_number,
                bk_details_bk_ifsc: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].bk_details_bk_ifsc,
                bk_details_acc_holder_name: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].bk_details_acc_holder_name,
                wallet_details_type: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].wallet_details_type,
                wallet_details_phone_number: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].wallet_details_phone_number,
                wallet_details_name: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].wallet_details_name,
                wallet_details_upi_id: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].wallet_details_upi_id,
                will_generate_direct_upi_payment_links: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].will_generate_direct_upi_payment_links,
                payment_qr_code: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].payment_qr_code,
                payment_signature: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].payment_signature,
                payment_watermark: paymentMetaDataArr.filter((paymentMetaData)=>paymentMetaData._id===paymentMetaDataId)[0].payment_watermark
            };
        }
        else{
        
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
    }
    else{
        
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
}