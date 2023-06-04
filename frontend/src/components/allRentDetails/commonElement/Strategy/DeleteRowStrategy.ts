// DeleteRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as RentDetailsModel from "../../../../models/allRentDetailsModel";
import * as commonImports from "../../../../commonCode/importMRTRelated";
import * as RentDetailsApi from "../../../../network/allRentDetailsApi";

export class DeleteRowStrategy implements ActionStrategy {
  async handle(values: any, validationErrors: any, row: commonImports.MRT_Row<RentDetailsModel.IRentDetailsViewModel>, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {
    // Copy the implementation of handleDeleteRow

    //send api delete request here, then refetch or update local table data for re-render
    try {
      RentDetailsApi.deleteARentDetail(row.getValue("_id")).then(() => {
        console.log("Rent Details Deleted!");
        const isDeleted = true;
        if (isDeleted) {
          // After successful deletion, set the message and open the dialog
          setMessage(
            `Rent Details with ID ${row.getValue("_id")} deleted successfully.`
          );
          setOpen(true);
        }
      });
    } catch (error) {
      console.error("Failed to delete Rent Detail:", error);
    }
  }
}