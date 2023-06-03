export interface IRentDetailsViewModel{
    _id:string;
    flatId: string;
    tenantId: string;
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
    createdAt:Date;
    updatedAt:Date;
}

export interface IRentDetailsInputModel{
    flatId: string;
    tenantId: string;
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
