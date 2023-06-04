import * as MaintenanceRequestModel from "../../../../models/maintenanceRequestModel";

export interface ActionStrategy {
  handle(values: MaintenanceRequestModel.IMaintenanceRequestViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void>;
}