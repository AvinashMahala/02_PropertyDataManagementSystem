export interface ITenantViewModel{
    _id:string;
    flatId: string;
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
    createdAt:Date;
    updatedAt:Date;
}

export interface ITenantInputModel{
    flatId: string;
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
