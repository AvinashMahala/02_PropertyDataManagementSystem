export interface ITenantViewModel{
    _id:string;
    propertyId:string;
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
    propertyId:string;
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

export const tenantSalutationArr=[
    {value:"mr", label:"Mr."},
    {value:"mrs", label:"Mrs."},
    {value:"miss", label:"Miss"},
    {value:"dr", label:"Dr."},
    {value:"the", label:"The"},
];
export const tenantProfessionArr=[
    {value:"privateJob", label:"Private Job"},
    {value:"govtJob", label:"Govt. Job"},
    {value:"selfEmployed", label:"Self Employed"},
    {value:"unEmployed", label:"Unemployed"},
    {value:"worker", label:"Worker"},
    {value:"bankingSector", label:"Banking Sector"},
    {value:"agent", label:"Agent"},
    {value:"teacherProfessor", label:"Teacher/Professor"},
    {value:"student", label:"Student"},
    {value:"defenceForces", label:"Defence Forces"},
];
export const tenantLeaseTypeArr=[
    {value:"untilTenantLeaves", label:"Until Tenant Leaves"},
    {value:"fixedAndDefined", label:"Fixed & Defined"},
];
export const tenantLeasePeriodTypeArr=[
    {value:"year", label:"Year"},
    {value:"months", label:"Months"},
    {value:"days", label:"Days"},
];
export const tenantExtraServiceArr=[
    {value:"none", label:"None"},
    {value:"bikeParking", label:"Bike Parking"},
    {value:"carParking", label:"Car Parking"},
    {value:"bothBikNCar", label:"Bike & Car Parking"},
];