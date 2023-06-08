import { InferSchemaType, Schema, model } from "mongoose";

const MaintenanceRequestsModelSchemaMain = new Schema({
    flatId: {type: Schema.Types.ObjectId, required: true},
    tenantId: {type: Schema.Types.ObjectId, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    priority: {type: String, required: true},
    amount: {type: Number, required: true},
    status: {type: String, required: true},
    tenantNotes: {type: String, required: true},
    ownerNotes: {type: String, required: true},
},{ timestamps: true });
type IMaintenanceRequestsMainModel = InferSchemaType<typeof MaintenanceRequestsModelSchemaMain>;
export default model<IMaintenanceRequestsMainModel>("MaintenanceRequests", MaintenanceRequestsModelSchemaMain);
export interface IMaintenanceRequestsCreateModel {
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
export interface IMaintenanceRequestsUpdateParamsModel{
    maintenanceRequestId:string;
}
export interface IMaintenanceRequestsUpdateBodyModel{
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