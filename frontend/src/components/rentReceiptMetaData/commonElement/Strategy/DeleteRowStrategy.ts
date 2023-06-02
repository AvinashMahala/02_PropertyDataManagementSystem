// DeleteRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as RentReceiptMDataModel from "../../../../models/rentReceiptMetaDataDetails";
import * as commonImports from "../../../../commonCode/importMRTRelated";
import * as RentReceiptMDataApi from "../../../../network/rentReceiptMDataApi";

export class DeleteRowStrategy implements ActionStrategy {
  async handle(values: any, validationErrors: any, row: commonImports.MRT_Row<RentReceiptMDataModel.IRentReceiptMetaDataDetailsViewModel>, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {
    // Copy the implementation of handleDeleteRow

    //send api delete request here, then refetch or update local table data for re-render
    try {
      RentReceiptMDataApi.deleteRentReceiptMetaDataDetails(row.getValue("_id")).then(() => {
        console.log("Rent Receipt Meta Data Deleted!");
        const isDeleted = true;
        if (isDeleted) {
          // After successful deletion, set the message and open the dialog
          setMessage(
            `Rent Receipt Meta Data ${row.getValue("rentReceiptMetaDataRefNm")} deleted successfully.`
          );
          setOpen(true);
        }
      });
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  }
}