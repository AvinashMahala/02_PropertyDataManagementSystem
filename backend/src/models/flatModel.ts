import { InferSchemaType, Schema, model } from "mongoose";


const FlatModelSchemaMain = new Schema({
    propertyId: {type: Schema.Types.ObjectId, required: true},
    roomName: {type: String, required: true},
    roomRent: {type: Number, required: true},
    roomColorSeparator: {type: String, required: true},
    roomType: {type: String, required: true},//1Rk, 2RK,3RK,1BHK,2BHK,3BHK,4BHK,5BHK,Flat,Cabin,Villa,PentHouse,Office, Shop,Stall,Restaurant,Basement,Ware-House, Garage, Others.
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
    flatId: Schema.Types.ObjectId;
    roomName: string;
    roomRent: number;
    roomColorSeparator: string;
    roomType: string;//1Rk, 2RK,3RK,1BHK,2BHK,3BHK,4BHK,5BHK,Flat,Cabin,Villa,PentHouse,Office, Shop,Stall,Restaurant,Basement,Ware-House, Garage, Others.
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
    flatId: Schema.Types.ObjectId;
    roomName: string;
    roomRent: number;
    roomColorSeparator: string;
    roomType: string;//1Rk, 2RK,3RK,1BHK,2BHK,3BHK,4BHK,5BHK,Flat,Cabin,Villa,PentHouse,Office, Shop,Stall,Restaurant,Basement,Ware-House, Garage, Others.
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