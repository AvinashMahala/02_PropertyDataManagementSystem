import { User } from "../models/user";
import { ITenantInputModel, ITenantViewModel } from "../models/tenantModel";
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

//getAllTenants
export async function RetrieveAllRecords():Promise<ITenantViewModel[]>{
    const response=await apiCall(customAPIBaseUrl,"/api/tenants/all",{method:"GET"});
    const tenantDetailsArr=await response.json();
    return tenantDetailsArr;
}

//getOneTenantDetails
export async function RetrieveOneRecord(Id:string):Promise<ITenantViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/tenants/"+Id,{method:"GET"});
    const tenantDetails=await response.json();
    return tenantDetails;
}

//createTenantDetails
export async function CreateOneRecord(tenantDetails:ITenantInputModel):Promise<ITenantViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/tenants/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(tenantDetails)
    });
    const createdTenantDetails=await response.json();
    return createdTenantDetails;
}

//updateTenantDetails
export async function UpdateOneRecord(Id:string,tenantDetails:ITenantInputModel):Promise<ITenantViewModel>{
    const response=await apiCall(customAPIBaseUrl,"/api/tenants/update/"+Id,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(tenantDetails)
    });
    const updatedTenantDetails=await response.json();
    return updatedTenantDetails;
}

//deleteTenantDetails
export async function DeleteOneRecord(Id:string){
    await apiCall(customAPIBaseUrl,"/api/tenants/delete/"+Id,{method:"DELETE"});
}
