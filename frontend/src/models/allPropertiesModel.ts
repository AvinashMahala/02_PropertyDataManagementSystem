export interface IPropertyDetailsViewModel{
    _id:string;
    ownerId: string;
    rentReceiptMetaDataId: string;
    propertyName: string;
    propertyType: string;
    propertyAddress: string;
    propertyTakeRentOf: string;
    createdAt:Date;
    updatedAt:Date;
}

export interface IPropertyDetailsInputModel{
    ownerId: string;
    rentReceiptMetaDataId: string;
    propertyName: string;
    propertyType: string;
    propertyAddress: string;
    propertyTakeRentOf: string;
}
