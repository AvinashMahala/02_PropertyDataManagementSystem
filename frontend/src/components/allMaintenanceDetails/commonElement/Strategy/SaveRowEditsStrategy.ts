// SaveRowEditsStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as MaintenanceRequestModel from "../../../../models/maintenanceRequestModel";
import * as MaintenanceApi from "../../../../network/maintenanceApi";

export class SaveRowEditsStrategy implements ActionStrategy {
  async handle(values: MaintenanceRequestModel.IMaintenanceRequestViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {

    if (!Object.keys(validationErrors).length) {
      //send/receive api updates here, then refetch or update local table data for re-render
      const updatedMaintenanceRequest: MaintenanceRequestModel.IMaintenanceRequestViewModel = {
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

      // Send the API request to update the Rent Receipt Meta Data
      await MaintenanceApi.updateMaintenanceRequest(
        updatedMaintenanceRequest._id,
        updatedMaintenanceRequest
      );

      MaintenanceApi.getAllMaintenanceRequest().then((updatedMaintenanceRequests: MaintenanceRequestModel.IMaintenanceRequestViewModel[]) => {
        setMessage(
          `Maintenance Request with ID ${row.getValue("_id")} Updated successfully.`
        );
        setOpen(true);

      });
      exitEditingMode(); //required to exit editing mode and close modal
    }
  }
}