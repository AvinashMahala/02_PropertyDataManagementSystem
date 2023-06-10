import * as AllRentDetailsModel from "../../../../models/allRentDetailsModel";

export interface ActionStrategy {
  handle(values: AllRentDetailsModel.IRentDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void>;
}