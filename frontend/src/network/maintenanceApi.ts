import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { User } from "../models/user";
import { IMaintenanceRequestInputModel, IMaintenanceRequestViewModel } from "../models/maintenanceRequestModel";


async function apiCall(input: RequestInfo, init?: RequestInit){
    const response = await fetch(input, init);
    if(response.ok){
        return response;
    }
    else{
        const errorBody=await response.json();
        const errorMessage=errorBody.error;

        if(response.status===401){
            throw new UnauthorizedError(errorMessage);
        }
        else if(response.status===409){
            throw new ConflictError(errorMessage);
        }
        else{
            throw Error("Request failed with status: "+response.status+" message: "+errorMessage);
        }

    }
}

//getAllMaintenanceRequest
export async function getAllMaintenanceRequest():Promise<IMaintenanceRequestViewModel[]>{
    const response=await apiCall("/api/maintenanceRequest/all",{method:"GET"});
    const flats=await response.json();
    return flats;
}

//getOneMaintenanceRequest
export async function getOneMaintenanceRequest(flatId:string):Promise<IMaintenanceRequestViewModel>{
    const response=await apiCall("/api/maintenanceRequest/"+flatId,{method:"GET"});
    const flatDetails=await response.json();
    return flatDetails;
}

//createAMaintenanceRequest
export async function createAMaintenanceRequest(flatDetails:IMaintenanceRequestInputModel):Promise<IMaintenanceRequestViewModel>{
    const response=await apiCall("/api/maintenanceRequest/create",{
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
export async function updateMaintenanceRequest(flatId:string,flatDetails:IMaintenanceRequestInputModel):Promise<IMaintenanceRequestViewModel>{
    const response=await apiCall("/api/maintenanceRequest/update/"+flatId,{
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
export async function deleteMaintenanceRequest(flatId:string){
    await apiCall("/api/maintenanceRequest/delete/"+flatId,{method:"DELETE"});
}





