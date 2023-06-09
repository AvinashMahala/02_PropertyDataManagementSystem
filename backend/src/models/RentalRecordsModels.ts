import { InferSchemaType, Schema, model } from "mongoose";

const RentModelSchemaMain = new Schema({
    propertyId:{type: Schema.Types.ObjectId, required: true},
    flatId: {type: Schema.Types.ObjectId, required: true},
    tenantId: {type: Schema.Types.ObjectId, required: true},
    rentStartDate: {type: Date, required: true},
    rentEndDate: {type: Date, required: true},
    rentAmount: {type: Number, required: true},
    buildingMaintenanceAmount: {type: Number, required: true},
    previousBalance: {type: Number, required: true},
    ebillPreviousMeterReading: {type: Number, required: true},
    ebillPreviousMeterReadingDate: {type: Date, required: true},
    ebillNewMeterReading: {type: Number, required: true},
    ebillNewMeterReadingDate: {type: Date, required: true},
    ebillMultiplier: {type: Number, required: true},
    ebillUnitsConsumed: {type: Number, required: true},
    ebillAmount: {type: Number, required: true},
    totalAmount: {type: Number, required: true},
    paidAmount: {type: Number, required: true},
    currentBalance: {type: Number, required: true},
    paymentDate: {type: Date, required: true},
    paymentMode: {type: String, required: true},
    paymentReference: {type: String, required: true},
    paymentRemarks: {type: String, required: true},
    paymentStatus: {type: String, required: true},
    paymentReceipt: {type: String, required: true},
    paymentReceiptDate: {type: Date, required: true},
    paymentReceiptRemarks: {type: String, required: true},
    paymentReceiptStatus: {type: String, required: true},
    
},{ timestamps: true });
type IRentMainModel = InferSchemaType<typeof RentModelSchemaMain>;
export default model<IRentMainModel>("Rent", RentModelSchemaMain);
export interface IRentCreateModel {
    propertyId: Schema.Types.ObjectId;
    flatId: Schema.Types.ObjectId;
    tenantId: Schema.Types.ObjectId;
    rentStartDate: Date;
    rentEndDate: Date;
    rentAmount: number;
    buildingMaintenanceAmount: number;
    previousBalance: number;
    ebillPreviousMeterReading: number;
    ebillPreviousMeterReadingDate: Date;
    ebillNewMeterReading: number;
    ebillNewMeterReadingDate: Date;
    ebillMultiplier: number;
    ebillUnitsConsumed: number;
    ebillAmount: number;
    totalAmount: number;
    paidAmount: number;
    currentBalance: number;
    paymentDate: Date;
    paymentMode: string;
    paymentReference: string;
    paymentRemarks: string;
    paymentStatus: string;
    paymentReceipt: string;
    paymentReceiptDate: Date;
    paymentReceiptRemarks: string;
    paymentReceiptStatus: string;
}
export interface IRentUpdateParamsModel{
    rentId:string;
}
export interface IRentUpdateBodyModel{
    propertyId: Schema.Types.ObjectId;
    flatId: Schema.Types.ObjectId;
    tenantId: Schema.Types.ObjectId;
    rentStartDate: Date;
    rentEndDate: Date;
    rentAmount: number;
    buildingMaintenanceAmount: number;
    previousBalance: number;
    ebillPreviousMeterReading: number;
    ebillPreviousMeterReadingDate: Date;
    ebillNewMeterReading: number;
    ebillNewMeterReadingDate: Date;
    ebillMultiplier: number;
    ebillUnitsConsumed: number;
    ebillAmount: number;
    totalAmount: number;
    paidAmount: number;
    currentBalance: number;
    paymentDate: Date;
    paymentMode: string;
    paymentReference: string;
    paymentRemarks: string;
    paymentStatus: string;
    paymentReceipt: string;
    paymentReceiptDate: Date;
    paymentReceiptRemarks: string;
    paymentReceiptStatus: string;
}