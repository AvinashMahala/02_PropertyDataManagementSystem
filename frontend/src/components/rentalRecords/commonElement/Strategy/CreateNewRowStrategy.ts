// CreateNewRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as AllRentDetailsModel from "../../../../models/allRentDetailsModel";
import * as AllRentDetailsApi from "../../../../network/allRentDetailsApi";

export class CreateNewRowStrategy implements ActionStrategy {

  async handle(values: AllRentDetailsModel.IRentDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any): Promise<void> {
    const rentDetailsInput: AllRentDetailsModel.IRentDetailsViewModel = {
      _id: values._id,
      flatId: values.flatId,
      tenantId: values.tenantId,
      rentStartDate: values.rentStartDate,
      rentEndDate: values.rentEndDate,
      rentAmount: values.rentAmount,
      buildingMaintenanceAmount: values.buildingMaintenanceAmount,
      previousBalance: values.previousBalance,
      ebillPreviousMeterReading: values.ebillPreviousMeterReading,
      ebillPreviousMeterReadingDate: values.ebillPreviousMeterReadingDate,
      ebillNewMeterReading: values.ebillNewMeterReading,
      ebillNewMeterReadingDate: values.ebillNewMeterReadingDate,
      ebillMultiplier: values.ebillMultiplier,
      ebillUnitsConsumed: values.ebillUnitsConsumed,
      ebillAmount: values.ebillAmount,
      totalAmount: values.totalAmount,
      paidAmount: values.paidAmount,
      currentBalance: values.currentBalance,
      paymentDate: values.paymentDate,
      paymentMode: values.paymentMode,
      paymentReference: values.paymentReference,
      paymentRemarks: values.paymentRemarks,
      paymentStatus: values.paymentStatus,
      paymentReceipt: values.paymentReceipt,
      paymentReceiptDate: values.paymentReceiptDate,
      paymentReceiptRemarks: values.paymentReceiptRemarks,
      paymentReceiptStatus: values.paymentReceiptStatus,
      createdAt: values.createdAt,
      updatedAt: values.updatedAt,
    };


    // Send the API request to update the Owner
    AllRentDetailsApi.CreateOneRecord(rentDetailsInput).then(() => {
      setMessage(
        `Rent Details with ID : ${rentDetailsInput._id} Added successfully.`
      );
      setOpen(true);
    });

  }
}