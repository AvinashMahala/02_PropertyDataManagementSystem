// DeleteRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as PropertiesModel from "../../../../models/allPropertiesModel";
import * as commonImports from "../../../../commonCode/importMRTRelated";
import * as PropertiesApi from "../../../../network/allPropertiesApi";

export class DeleteRowStrategy implements ActionStrategy {
  async handle(values: any, validationErrors: any, row: commonImports.MRT_Row<PropertiesModel.IPropertyDetailsViewModel>, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {
    // Copy the implementation of handleDeleteRow

    //send api delete request here, then refetch or update local table data for re-render
    try {
      PropertiesApi.DeleteOneRecord(row.getValue("_id")).then(() => {
        console.log("Property Details Deleted!");
        const isDeleted = true;
        if (isDeleted) {
          // After successful deletion, set the message and open the dialog
          setMessage(
            `Property Details with Name ${row.getValue("propertyName")} deleted successfully.`
          );
          setOpen(true);
        }
      });
    } catch (error) {
      console.error("Failed to delete Property:", error);
    }
  }
}