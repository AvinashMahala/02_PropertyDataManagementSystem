// DeleteRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as TenantModel from "../../../../models/tenantModel";
import * as commonImports from "../../../../commonCode/importMRTRelated";
import * as TenantApi from "../../../../network/tenantApi";

export class DeleteRowStrategy implements ActionStrategy {
  async handle(values: any, validationErrors: any, row: commonImports.MRT_Row<TenantModel.ITenantViewModel>, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {
    // Copy the implementation of handleDeleteRow

    //send api delete request here, then refetch or update local table data for re-render
    try {
      TenantApi.deleteTenantDetails(row.getValue("_id")).then(() => {
        console.log("Tenant Details Deleted!");
        const isDeleted = true;
        if (isDeleted) {
          // After successful deletion, set the message and open the dialog
          setMessage(
            `Tenant Details with Name ${row.getValue("Name")} deleted successfully.`
          );
          setOpen(true);
        }
      });
    } catch (error) {
      console.error("Failed to delete Tenant:", error);
    }
  }
}