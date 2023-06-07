// SaveRowEditsStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as RentDetailsModel from "../../../../models/allRentDetailsModel";
import * as RentDetailsApi from "../../../../network/allRentDetailsApi";

export class SaveRowEditsStrategy implements ActionStrategy {
  async handle(values: RentDetailsModel.IRentDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {

    if (!Object.keys(validationErrors).length) {
      //send/receive api updates here, then refetch or update local table data for re-render
      const updatedRent: RentDetailsModel.IRentDetailsViewModel = {
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

      // Send the API request to update the Rent Receipt Meta Data
      await RentDetailsApi.UpdateOneRecord(
        updatedRent._id,
        updatedRent
      );

      RentDetailsApi.RetrieveAllRecords().then((updatedRent: RentDetailsModel.IRentDetailsViewModel[]) => {
        setMessage(
          `Rent Detail with ID ${row.getValue("_id")} Updated successfully.`
        );
        setOpen(true);

      });
      exitEditingMode(); //required to exit editing mode and close modal
    }
  }
}