import * as RentReceiptMDataModel from "../../../../models/rentReceiptMetaDataDetails";

export interface ActionStrategy {
  handle(values: RentReceiptMDataModel.IRentReceiptMetaDataDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void>;
}