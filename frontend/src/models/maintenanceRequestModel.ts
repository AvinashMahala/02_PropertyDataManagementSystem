export interface IMaintenanceRequestViewModel{
    _id:string;
    flatId: string;
    tenantId: string;
    startDate: Date;
    endDate: Date;
    priority: string;
    amount: number;
    status: string;
    tenantNotes: string;
    ownerNotes: string;
    createdAt:Date;
    updatedAt:Date;
}

export interface IMaintenanceRequestInputModel{
    flatId: string;
    tenantId: string;
    startDate: Date;
    endDate: Date;
    priority: string;
    amount: number;
    status: string;
    tenantNotes: string;
    ownerNotes: string;
}
