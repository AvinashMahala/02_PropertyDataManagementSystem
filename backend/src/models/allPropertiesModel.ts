import { InferSchemaType, Schema, model } from "mongoose";


const PropertyModelSchemaMain = new Schema({
    ownerId: {type: Schema.Types.ObjectId, required: true},
    rentReceiptMetaDataId: {type: Schema.Types.ObjectId, required: true},

    propertyName: {type: String, required: true},
    propertyType: {type: String, required: true},
    propertyAddress: {type: String, required: true},
    propertyTakeRentOf: {type: String, required: true},

},{ timestamps: true });



type IPropertyModelMainModel = InferSchemaType<typeof PropertyModelSchemaMain>;

export default model<IPropertyModelMainModel>("PropertySchema", PropertyModelSchemaMain);



export interface IPropertyModelCreateModel {
    ownerId: Schema.Types.ObjectId;
    rentReceiptMetaDataId: Schema.Types.ObjectId;

    propertyName: string;
    propertyType: string;
    propertyAddress: string;
    propertyTakeRentOf: string;
}


export interface IPropertyModelUpdateParamsModel{
    propertyId: string;
}

export interface IPropertyModelUpdateBodyModel{
    ownerId: Schema.Types.ObjectId;
    rentReceiptMetaDataId: Schema.Types.ObjectId;

    propertyName: string;
    propertyType: string;
    propertyAddress: string;
    propertyTakeRentOf: string;
}