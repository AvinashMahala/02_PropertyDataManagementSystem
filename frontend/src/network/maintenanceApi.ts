import { User } from "../models/user";
import { IMaintenanceRequestInputModel, IMaintenanceRequestViewModel } from "../models/maintenanceRequestModel";
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

//getAllMaintenanceRequest
export async function RetrieveAllRecords():Promise<IMaintenanceRequestViewModel[]>{
    const response=await apiCall(customAPIBaseUrl,"/api/maintenanceRequest/all",{method:"GET"});
    const flats=await response.json();
    return flats;
}

//getOneMaintenanceRequest
export async function RetrieveOneRecord(flatId:string):Promise<IMaintenanceRequestViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/maintenanceRequest/"+flatId,{method:"GET"});
    const flatDetails=await response.json();
    return flatDetails;
}

//createAMaintenanceRequest
export async function CreateOneRecord(flatDetails:IMaintenanceRequestInputModel):Promise<IMaintenanceRequestViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/maintenanceRequest/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(flatDetails)
    });
    const createdFlatDetails=await response.json();
    return createdFlatDetails;
}

//updateMaintenanceRequest
export async function UpdateOneRecord(flatId:string,flatDetails:IMaintenanceRequestInputModel):Promise<IMaintenanceRequestViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/maintenanceRequest/update/"+flatId,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(flatDetails)
    });
    const updatedFlatDetails=await response.json();
    return updatedFlatDetails;
}

//deleteMaintenanceRequest
export async function DeleteOneRecord(flatId:string){
    await apiCall(customAPIBaseUrl,"/api/maintenanceRequest/delete/"+flatId,{method:"DELETE"});
}





