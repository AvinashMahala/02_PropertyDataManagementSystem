// CreateNewRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as MaintenanceRequestModel from "../../../../models/maintenanceRequestModel";
import * as MaintenanceApi from "../../../../network/maintenanceApi";

export class CreateNewRowStrategy implements ActionStrategy {

  async handle(values: MaintenanceRequestModel.IMaintenanceRequestViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any): Promise<void> {
    const maintenanceRequestModelInput: MaintenanceRequestModel.IMaintenanceRequestViewModel = {
      _id: values._id,
      flatId: values.flatId,
      tenantId: values.tenantId,
      startDate: values.startDate,
      endDate: values.endDate,
      priority: values.priority,
      amount: values.amount,
      status: values.status,
      tenantNotes: values.tenantNotes,
      ownerNotes: values.ownerNotes,
    
      createdAt: values.createdAt,
      updatedAt: values.updatedAt,
    };


    // Send the API request to update the Owner
    MaintenanceApi.createAMaintenanceRequest(maintenanceRequestModelInput).then(() => {
      setMessage(
        `Maintenance Request with ID : ${maintenanceRequestModelInput._id} Added successfully.`
      );
      setOpen(true);
    });

  }
}