import { InferSchemaType, Schema, model } from "mongoose";

const TenantModelSchemaMain = new Schema({
    flatId: {type: Schema.Types.ObjectId, required: true},
    Photo: {type: String, required: false},
    Salutation: {type: String, required: true},
    Name: {type: String, required: true},
    Profession: {type: String, required: true},
    NoOfPeople: {type: Number, required: true},
    NativeAddress: {type: String, required: true},
    WorkAddress: {type: String, required: true},
    PrimaryPhNo: {type: Number, required: true},
    SecondaryPhNo: {type: Number, required: false},
    Email: {type: String, required: true},
    DepositAmount: {type: Number, required: true},
    DepositPaidDate: {type: Date, required: true},
    Balance: {type: Number, required: true},
    MoveInDate: {type: Date, required: true},
    StartRentFromDate: {type: Date, required: true},
    LeaseType: {type: String, required: true},//1.Until Tenant Leaves 2.Fixed and Defined
    FixedLeaseStartDate: {type: Date, required: false},
    FixedLeasePeriod: {type: Number, required: false},
    FixedLeasePeriodType: {type: String, required: false},//1.Months 2.Years 3.Days
    EmergencyContactName: {type: String, required: true},
    EmergencyContactNo: {type: Number, required: true},
    EmergencyContactRelation: {type: String, required: true},
    ExtraService: {type: String, required: true},//1.Bike Parking 2.Car Parking
},{ timestamps: true });

type ITenantMainModel = InferSchemaType<typeof TenantModelSchemaMain>;
export default model<ITenantMainModel>("Tenants", TenantModelSchemaMain);
export interface ITenantCreateModel {
    flatId: Schema.Types.ObjectId;
    Photo: string;
    Salutation: string;
    Name: string;
    Profession: string;
    NoOfPeople: number;
    NativeAddress: string;
    WorkAddress: string;
    PrimaryPhNo: number;
    SecondaryPhNo: number;
    Email: string;
    DepositAmount: number;
    DepositPaidDate: Date;
    Balance: number;
    MoveInDate: Date;
    StartRentFromDate: Date;
    LeaseType: string;//1.Until Tenant Leaves 2.Fixed and Defined
    FixedLeaseStartDate: Date;
    FixedLeasePeriod: number;
    FixedLeasePeriodType: string;//1.Months 2.Years 3.Days
    EmergencyContactName: string;
    EmergencyContactNo: number;
    EmergencyContactRelation: string;
    ExtraService: string;//1.Bike Parking 2.Car Parking
}

export interface ITenantUpdateParamsModel{
    TenantId:string;
}
export interface ITenantUpdateBodyModel{
    flatId: Schema.Types.ObjectId;
    Photo: string;
    Salutation: string;
    Name: string;
    Profession: string;
    NoOfPeople: number;
    NativeAddress: string;
    WorkAddress: string;
    PrimaryPhNo: number;
    SecondaryPhNo: number;
    Email: string;
    DepositAmount: number;
    DepositPaidDate: Date;
    Balance: number;
    MoveInDate: Date;
    StartRentFromDate: Date;
    LeaseType: string;//1.Until Tenant Leaves 2.Fixed and Defined
    FixedLeaseStartDate: Date;
    FixedLeasePeriod: number;
    FixedLeasePeriodType: string;//1.Months 2.Years 3.Days
    EmergencyContactName: string;
    EmergencyContactNo: number;
    EmergencyContactRelation: string;
    ExtraService: string;//1.Bike Parking 2.Car Parking
}