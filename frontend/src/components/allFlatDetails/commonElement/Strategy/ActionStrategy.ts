import * as FlatModel from "../../../../models/flatModel";

export interface ActionStrategy {
  handle(values: FlatModel.IFlatViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void>;
}