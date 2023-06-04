// CreateNewRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as TenantModel from "../../../../models/tenantModel";
import * as TenantApi from "../../../../network/tenantApi";

export class CreateNewRowStrategy implements ActionStrategy {

  async handle(values: TenantModel.ITenantViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any): Promise<void> {
    const propertiesModelInput: TenantModel.ITenantViewModel = {
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


    // Send the API request to update the Owner
    TenantApi.createTenantDetails(propertiesModelInput).then(() => {
      setMessage(
        `Tenant with Name : ${propertiesModelInput.Name} Added successfully.`
      );
      setOpen(true);
    });

  }
}