// SaveRowEditsStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as PropertiesModel from "../../../../models/allPropertiesModel";
import * as PropertiesApi from "../../../../network/allPropertiesApi";

export class SaveRowEditsStrategy implements ActionStrategy {
  async handle(values: PropertiesModel.IPropertyDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any, exitEditingMode: any): Promise<void> {

    if (!Object.keys(validationErrors).length) {
      //send/receive api updates here, then refetch or update local table data for re-render
      const updatedProperty: PropertiesModel.IPropertyDetailsViewModel = {
        _id: values._id,
        ownerId: values.ownerId,
        rentReceiptMetaDataId: values.rentReceiptMetaDataId,
        propertyName: values.propertyName,
        propertyType: values.propertyType,
        propertyAddress: values.propertyAddress,
        propertyTakeRentOf: values.propertyTakeRentOf,
        createdAt: values.createdAt,
        updatedAt: values.updatedAt,
      };

      // Send the API request to update the Rent Receipt Meta Data
      await PropertiesApi.updatePropertyDetails(
        updatedProperty._id,
        updatedProperty
      );

      PropertiesApi.getAllPropertyDetails().then((updatedProperties: PropertiesModel.IPropertyDetailsViewModel[]) => {
        setMessage(
          `Property with Name ${row.getValue("propertyName")} Updated successfully.`
        );
        setOpen(true);

      });
      exitEditingMode(); //required to exit editing mode and close modal
    }
  }
}