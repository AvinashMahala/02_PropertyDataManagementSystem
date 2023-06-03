import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { User } from "../models/user";
import { IPropertyDetailsInputModel, IPropertyDetailsViewModel } from "../models/allPropertiesModel";


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

//GetAllPropertiesDetails
export async function getAllOwnerDetails():Promise<IPropertyDetailsViewModel[]>{
    const response=await apiCall("/api/ownerDetails/all",{method:"GET"});
    const ownerDetails=await response.json();
    return ownerDetails;
}

//GetOnePropertyDetails
export async function getOneOwnerDetails(ownerId:string):Promise<IPropertyDetailsViewModel>{
    const response=await apiCall("/api/ownerDetails/"+ownerId,{method:"GET"});
    const ownerDetails=await response.json();
    return ownerDetails;
}

//CreatePropertyDetails
export async function createOwnerDetails(ownerDetails:IPropertyDetailsInputModel):Promise<IPropertyDetailsViewModel>{
    const response=await apiCall("/api/ownerDetails/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ownerDetails)
    });
    const createdOwnerDetails=await response.json();
    return createdOwnerDetails;
}

//UpdatePropertyDetails
export async function updateOwnerDetails(ownerId:string,ownerDetails:IPropertyDetailsInputModel):Promise<IPropertyDetailsViewModel>{
    const response=await apiCall("/api/ownerDetails/update/"+ownerId,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ownerDetails)
    });
    const updatedOwnerDetails=await response.json();
    return updatedOwnerDetails;
}

//DeletePropertyDetails
export async function deleteOwnerDetails(ownerId:string){
    await apiCall("/api/ownerDetails/delete/"+ownerId,{method:"DELETE"});
}





