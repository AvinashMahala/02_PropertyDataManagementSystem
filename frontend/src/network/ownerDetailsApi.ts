import { User } from "../models/user";
import { IOwnerDetailsInputModel, IOwnerDetailsViewModel } from "../models/ownerDetails";


const customAPIBaseUrl = "https://pdms-web-api-service.onrender.com";

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


//GetAllOwnerDetails
export async function RetrieveAllRecords():Promise<IOwnerDetailsViewModel[]>{
    const response=await apiCall(customAPIBaseUrl,"/api/ownerDetails/all",{method:"GET"});
    const ownerDetails=await response.json();
    return ownerDetails;
}

//GetOneOwnerDetails
export async function RetrieveOneRecord(ownerId:string):Promise<IOwnerDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/ownerDetails/"+ownerId,{method:"GET"});
    const ownerDetails=await response.json();
    return ownerDetails;
}

//CreateOwnerDetails
export async function CreateOneRecord(ownerDetails:IOwnerDetailsInputModel):Promise<IOwnerDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/ownerDetails/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ownerDetails)
    });
    const createdOwnerDetails=await response.json();
    return createdOwnerDetails;
}

//UpdateOwnerDetails
export async function UpdateOneRecord(ownerId:string,ownerDetails:IOwnerDetailsInputModel):Promise<IOwnerDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/ownerDetails/update/"+ownerId,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ownerDetails)
    });
    const updatedOwnerDetails=await response.json();
    return updatedOwnerDetails;
}

//DeleteOwnerDetails
export async function DeleteOneRecord(ownerId:string){
    await apiCall(customAPIBaseUrl,"/api/ownerDetails/delete/"+ownerId,{method:"DELETE"});
}
