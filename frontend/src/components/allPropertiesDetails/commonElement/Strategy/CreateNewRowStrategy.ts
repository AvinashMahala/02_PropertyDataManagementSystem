// CreateNewRowStrategy.ts
import { ActionStrategy } from './ActionStrategy';
import * as PropertiesModel from "../../../../models/allPropertiesModel";
import * as PropertiesApi from "../../../../network/allPropertiesApi";

export class CreateNewRowStrategy implements ActionStrategy {

  async handle(values: PropertiesModel.IPropertyDetailsViewModel, validationErrors: Object, row: any, setMessage: any, setOpen: any): Promise<void> {
    const propertiesModelInput: PropertiesModel.IPropertyDetailsViewModel = {
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


    // Send the API request to update the Owner
    PropertiesApi.CreateOneRecord(propertiesModelInput).then(() => {
      setMessage(
        `Property with Name : ${propertiesModelInput.propertyName} Added successfully.`
      );
      setOpen(true);
    });

  }
}