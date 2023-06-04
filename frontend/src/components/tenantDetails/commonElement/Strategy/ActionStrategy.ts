import * as TenantModel from "../../../../models/tenantModel";

export interface ActionStrategy {
  handle(values: TenantModel.ITenantViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void>;
}