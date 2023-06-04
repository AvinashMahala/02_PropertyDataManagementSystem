// CreateNewRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as FlatModel from "../../../../models/flatModel";
import * as FlatsApi from "../../../../network/flatDetailsApi";

export class CreateNewRowStrategy implements ActionStrategy {

  async handle(values: FlatModel.IFlatViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any): Promise<void> {
    const flatDetailsInput: FlatModel.IFlatViewModel = {
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


    // Send the API request to update the Owner
    FlatsApi.createAFlat(flatDetailsInput).then(() => {
      setMessage(
        `Property with Name : ${flatDetailsInput.roomName} Added successfully.`
      );
      setOpen(true);
    });

  }
}