import { User } from "../models/user";
import { IFlatInputModel, IFlatViewModel } from "../models/flatModel";
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


//getAllFlats
export async function RetrieveAllRecords():Promise<IFlatViewModel[]>{
    const response=await apiCall(customAPIBaseUrl,"/api/flats/all",{method:"GET"});
    const flats=await response.json();
    return flats;
}

//getOneFlat
export async function RetrieveOneRecord(flatId:string):Promise<IFlatViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/flats/"+flatId,{method:"GET"});
    const flatDetails=await response.json();
    return flatDetails;
}

//createAFlat
export async function CreateOneRecord(flatDetails:IFlatInputModel):Promise<IFlatViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/flats/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(flatDetails)
    });
    const createdFlatDetails=await response.json();
    return createdFlatDetails;
}

//updateFlatDetails
export async function UpdateOneRecord(flatId:string,flatDetails:IFlatInputModel):Promise<IFlatViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/flats/update/"+flatId,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(flatDetails)
    });
    const updatedFlatDetails=await response.json();
    return updatedFlatDetails;
}

//deleteFlatDetails
export async function DeleteOneRecord(flatId:string){
    await apiCall(customAPIBaseUrl,"/api/flats/delete/"+flatId,{method:"DELETE"});
}





