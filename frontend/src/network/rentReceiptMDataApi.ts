import { User } from "../models/user";
import { IRentReceiptMetaDataDetailsInputModel, IRentReceiptMetaDataDetailsViewModel } from "../models/rentReceiptMetaDataDetails";


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

//GetAllRentReceiptMetaDataDetails
export async function RetrieveAllRecords():Promise<IRentReceiptMetaDataDetailsViewModel[]>{
    const response=await apiCall(customAPIBaseUrl,"/api/rentReceiptMetaDataDetails/all",{method:"GET"});
    const rentReceiptMetaDataDetailsArr=await response.json();
    return rentReceiptMetaDataDetailsArr;
}

//GetOneRentReceiptMetaDataDetails
export async function RetrieveOneRecord(Id:string):Promise<IRentReceiptMetaDataDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/rentReceiptMetaDataDetails/"+Id,{method:"GET"});
    const rentReceiptMetaDataDetails=await response.json();
    return rentReceiptMetaDataDetails;
}

//CreateRentReceiptMetaDataDetails
export async function CreateOneRecord(rentReceiptMetaDataDetails:IRentReceiptMetaDataDetailsInputModel):Promise<IRentReceiptMetaDataDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/rentReceiptMetaDataDetails/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(rentReceiptMetaDataDetails)
    });
    const createdRentReceiptMetaDataDetails=await response.json();
    return createdRentReceiptMetaDataDetails;
}

//UpdateRentReceiptMetaDataDetails
export async function UpdateOneRecord(Id:string,rentReceiptMetaDataDetails:IRentReceiptMetaDataDetailsInputModel):Promise<IRentReceiptMetaDataDetailsViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/rentReceiptMetaDataDetails/update/"+Id,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(rentReceiptMetaDataDetails)
    });
    const updatedRentReceiptMetaDataDetails=await response.json();
    return updatedRentReceiptMetaDataDetails;
}

//DeleteRentReceiptMetaDataDetails
export async function DeleteOneRecord(Id:string){
    await apiCall(customAPIBaseUrl,"/api/rentReceiptMetaDataDetails/delete/"+Id,{method:"DELETE"});
}
