// DeleteRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as FlatModel from "./../../../../models/flatModel";
import * as commonImports from "../../../../commonCode/importMRTRelated";
import * as FlatApi from "../../../../network/flatDetailsApi";

export class DeleteRowStrategy implements ActionStrategy {
  async handle(values: any, validationErrors: any, row: commonImports.MRT_Row<FlatModel.IFlatViewModel>, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {
    // Copy the implementation of handleDeleteRow

    //send api delete request here, then refetch or update local table data for re-render
    try {
      FlatApi.DeleteOneRecord(row.getValue("_id")).then(() => {
        console.log("Flat Details Deleted!");
        const isDeleted = true;
        if (isDeleted) {
          // After successful deletion, set the message and open the dialog
          setMessage(
            `Flat Details with Name ${row.getValue("roomName")} deleted successfully.`
          );
          setOpen(true);
        }
      });
    } catch (error) {
      console.error("Failed to delete Flat Details!:", error);
    }
  }
}