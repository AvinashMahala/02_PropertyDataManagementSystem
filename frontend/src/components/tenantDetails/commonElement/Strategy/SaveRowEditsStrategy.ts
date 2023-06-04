// SaveRowEditsStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as TenantModel from "../../../../models/tenantModel";
import * as TenantApi from "../../../../network/tenantApi";

export class SaveRowEditsStrategy implements ActionStrategy {
  async handle(values: TenantModel.ITenantViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {

    if (!Object.keys(validationErrors).length) {
      //send/receive api updates here, then refetch or update local table data for re-render
      const updatedProperty: TenantModel.ITenantViewModel = {
        _id: values._id,
        flatId: values.flatId,
        Photo: values.Photo,
        Salutation: values.Salutation,
        Name: values.Name,
        Profession: values.Profession,
        NoOfPeople: values.NoOfPeople,
        NativeAddress: values.NativeAddress,
        WorkAddress: values.WorkAddress,
        PrimaryPhNo: values.PrimaryPhNo,
        SecondaryPhNo: values.SecondaryPhNo,
        Email: values.Email,
        DepositAmount: values.DepositAmount,
        DepositPaidDate: values.DepositPaidDate,
        Balance: values.Balance,
        MoveInDate: values.MoveInDate,
        StartRentFromDate: values.StartRentFromDate,
        LeaseType: values.LeaseType, //1.Until Tenant Leaves 2.Fixed and Defined
        FixedLeaseStartDate: values.FixedLeaseStartDate,
        FixedLeasePeriod: values.FixedLeasePeriod,
        FixedLeasePeriodType: values.FixedLeasePeriodType,//1.Months 2.Years 3.Days
        EmergencyContactName: values.EmergencyContactName,
        EmergencyContactNo: values.EmergencyContactNo,
        EmergencyContactRelation: values.EmergencyContactRelation,
        ExtraService: values.ExtraService,//1.Bike Parking 2.Car Parking
        createdAt: values.createdAt,
        updatedAt: values.updatedAt,
      };

      // Send the API request to update the Rent Receipt Meta Data
      await TenantApi.updateTenantDetails(
        updatedProperty._id,
        updatedProperty
      );

      TenantApi.getAllTenants().then((updatedProperties: TenantModel.ITenantViewModel[]) => {
        setMessage(
          `Tenant with Name ${row.getValue("Name")} Updated successfully.`
        );
        setOpen(true);

      });
      exitEditingMode(); //required to exit editing mode and close modal
    }
  }
}