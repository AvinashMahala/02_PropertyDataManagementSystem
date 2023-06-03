export interface IFlatViewModel{
    _id:string;
    flatId: string;
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
    createdAt:Date;
    updatedAt:Date;
}

export interface IFlatInputModel{
    flatId: string;
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