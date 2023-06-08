// DeleteRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as MaintenanceRequestModel from "../../../../models/maintenanceRequestModel";
import * as commonImports from "../../../../commonCode/CommonImports";
import * as MaintenanceApi from "../../../../network/maintenanceApi";

export class DeleteRowStrategy implements ActionStrategy {
  async handle(values: any, validationErrors: any, row: commonImports.MRT_Row<MaintenanceRequestModel.IMaintenanceRequestViewModel>, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {
    // Copy the implementation of handleDeleteRow

    //send api delete request here, then refetch or update local table data for re-render
    try {
      MaintenanceApi.DeleteOneRecord(row.getValue("_id")).then(() => {
        console.log("Maintenance Request Details Deleted!");
        const isDeleted = true;
        if (isDeleted) {
          // After successful deletion, set the message and open the dialog
          setMessage(
            `Maintenance Request Details with ID ${row.getValue("_id")} deleted successfully.`
          );
          setOpen(true);
        }
      });
    } catch (error) {
      console.error("Failed to delete Maintenance Request:", error);
    }
  }
}