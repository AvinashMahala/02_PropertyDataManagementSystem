import { InferSchemaType, Schema, model } from "mongoose";

const FlatModelSchemaMain = new Schema({
    propertyId: {type: Schema.Types.ObjectId, required: true},
    roomName: {type: String, required: true},
    roomRent: {type: Number, required: true},
    roomColorSeparator: {type: String, required: true},
    roomType: {type: String, required: true},
    roomRemarks: {type: String, required: false},
    rentCalcMethod: {type: String, required: true},
    electricityBillType: {type: String, required: true},
    electricityBillMeterName: {type: String, required: false},
    electricityBillPerUnitCost: {type: Number, required: false},
    electricityBillMeterReading: {type: Number, required: false},
    electricityBillFixedAmtCost: {type: Number, required: false},
    waterBillType: {type: String, required: true},
    waterBillMeterName: {type: String, required: false},
    waterBillPerUnitCost: {type: Number, required: false},
    waterBillMeterReading: {type: Number, required: false},
    waterBillFixedAmtCost: {type: Number, required: false},
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