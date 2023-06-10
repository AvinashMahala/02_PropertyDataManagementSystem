import * as PropertiesModel from "../../../../models/allPropertiesModel";

export interface ActionStrategy {
  handle(values: PropertiesModel.IPropertyDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void>;
}