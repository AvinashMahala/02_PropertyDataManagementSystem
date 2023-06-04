import { InferSchemaType, Schema, model } from "mongoose";

const FlatModelSchemaMain = new Schema({
    propertyId: {type: Schema.Types.ObjectId, required: true},
    roomName: {type: String, required: true},
    roomRent: {type: Number, required: true},
    roomColorSeparator: {type: String, required: true},
    roomType: {type: String, required: true},
    roomRemarks: {type: String, required: true},
    rentCalcMethod: {type: String, required: true},
    electricityBillType: {type: String, required: true},
    electricityBillMeterName: {type: String, required: true},
    electricityBillPerUnitCost: {type: Number, required: true},
    electricityBillMeterReading: {type: Number, required: true},
    electricityBillFixedAmtCost: {type: Number, required: true},
    waterBillType: {type: String, required: true},
    waterBillMeterName: {type: String, required: true},
    waterBillPerUnitCost: {type: Number, required: true},
    waterBillMeterReading: {type: Number, required: true},
    waterBillFixedAmtCost: {type: Number, required: true},
},{ timestamps: true });

type IFlatModelMainModel = InferSchemaType<typeof FlatModelSchemaMain>;
export default model<IFlatModelMainModel>("FlatSchema", FlatModelSchemaMain);
export interface IFlatModelCreateModel {
    propertyId: Schema.Types.ObjectId;
    roomName: string;
    roomRent: number;
    roomColorSeparator: string;
    roomType: string;
    roomRemarks: string;
    rentCalcMethod: string;
    electricityBillType: string;
    electricityBillMeterName: string;
    electricityBillPerUnitCost: number;
    electricityBillMeterReading: number;
    electricityBillFixedAmtCost: number;
    waterBillType: string;
    waterBillMeterName: string;
    waterBillPerUnitCost: number;
    waterBillMeterReading: number;
    waterBillFixedAmtCost: number;
}
export interface IFlatModelUpdateParamsModel{
    FlatId: string;
}
export interface IFlatModelUpdateBodyModel{
    propertyId: Schema.Types.ObjectId;
    roomName: string;
    roomRent: number;
    roomColorSeparator: string;
    roomType: string;
    roomRemarks: string;
    rentCalcMethod: string;
    electricityBillType: string;
    electricityBillMeterName: string;
    electricityBillPerUnitCost: number;
    electricityBillMeterReading: number;
    electricityBillFixedAmtCost: number;
    waterBillType: string;
    waterBillMeterName: string;
    waterBillPerUnitCost: number;
    waterBillMeterReading: number;
    waterBillFixedAmtCost: number;
}