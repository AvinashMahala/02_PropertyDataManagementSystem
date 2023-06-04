// SaveRowEditsStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as FlatModel from "./../../../../models/flatModel";
import * as FlatApi from "../../../../network/flatDetailsApi";

export class SaveRowEditsStrategy implements ActionStrategy {
  async handle(values: FlatModel.IFlatViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {

    if (!Object.keys(validationErrors).length) {
      //send/receive api updates here, then refetch or update local table data for re-render
      const updatedProperty: FlatModel.IFlatViewModel = {
        _id: values._id,
        propertyId: values.propertyId,
        roomName: values.roomName,
        roomRent: values.roomRent,
        roomColorSeparator: values.roomColorSeparator,
        roomType: values.roomType,
        roomRemarks: values.roomRemarks,
        rentCalcMethod: values.rentCalcMethod,
        electricityBillType: values.electricityBillType,
        electricityBillMeterName: values.electricityBillMeterName,
        electricityBillPerUnitCost: values.electricityBillPerUnitCost,
        electricityBillMeterReading: values.electricityBillMeterReading,
        electricityBillFixedAmtCost: values.electricityBillFixedAmtCost,
        waterBillType: values.waterBillType,
        waterBillMeterName: values.waterBillMeterName,
        waterBillPerUnitCost: values.waterBillPerUnitCost,
        waterBillMeterReading: values.waterBillMeterReading,
        waterBillFixedAmtCost: values.waterBillFixedAmtCost,
        createdAt: values.createdAt,
        updatedAt: values.updatedAt,
      };

      // Send the API request to update the Rent Receipt Meta Data
      await FlatApi.updateFlatDetails(
        updatedProperty._id,
        updatedProperty
      );

      FlatApi.getAllFlats().then((updateFlat: FlatModel.IFlatViewModel[]) => {
        setMessage(
          `Flat with Name ${row.getValue("roomName")} Updated successfully.`
        );
        setOpen(true);

      });
      exitEditingMode(); //required to exit editing mode and close modal
    }
  }
}