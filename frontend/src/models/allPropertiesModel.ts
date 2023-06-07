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


export const propertyTypeOptions=[
    {"_id":"Apartment","name":"Apartment"},
    {"_id":"House","name":"House"},
    {"_id":"Others","name":"Others"},
  ];
  
export const propertyTakeRentOfOptions=[
    {"_id":"Daily","name":"Daily"},
    {"_id":"Weekly","name":"Weekly"},
    {"_id":"Monthly","name":"Monthly"},
  ];
