import { User } from "../models/user";
import { IPropertyDetailsInputModel, IPropertyDetailsViewModel } from "../models/allPropertiesModel";
// Import the configuration module
import config from './../config';
const customAPIBaseUrl = config.customAPIBaseUrl;

class UnauthorizedError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

class ConflictError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "ConflictError";
  }
}

async function apiCall(
  baseURL: string | URL | undefined,
  input: string | URL,
  init = {}
) {
  const url = new URL(input, baseURL); // Combine base URL and request URL
  const response = await fetch(url.href, init);

  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;

    if (response.status === 401) {
      throw new UnauthorizedError(errorMessage);
    } else if (response.status === 409) {
      throw new ConflictError(errorMessage);
    } else {
      throw Error(
        "Request failed with status: " +
          response.status +
          " message: " +
          errorMessage
      );
    }
  }
}


//GetAllPropertiesDetails
export async function RetrieveAllRecords():Promise<IPropertyDetailsViewModel[]>{
    const response=await apiCall(customAPIBaseUrl,"/api/properties/all",{method:"GET"});
    const propertyDetails=await response.json();
    return propertyDetails;
}

//GetOnePropertyDetails
export async function RetrieveOneRecord(propertyId:string):Promise<IPropertyDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/properties/"+propertyId,{method:"GET"});
    const propertyDetails=await response.json();
    return propertyDetails;
}

//CreatePropertyDetails
export async function CreateOneRecord(propertyDetails:IPropertyDetailsInputModel):Promise<IPropertyDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/properties/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(propertyDetails)
    });
    const createdPropertyDetails=await response.json();
    return createdPropertyDetails;
}

//UpdatePropertyDetails
export async function UpdateOneRecord(propertyId:string,propertyDetails:IPropertyDetailsInputModel):Promise<IPropertyDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/properties/update/"+propertyId,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(propertyDetails)
    });
    const updatedPropertyDetails=await response.json();
    return updatedPropertyDetails;
}

//DeletePropertyDetails
export async function DeleteOneRecord(propertyId:string){
    await apiCall(customAPIBaseUrl,"/api/properties/delete/"+propertyId,{method:"DELETE"});
}





