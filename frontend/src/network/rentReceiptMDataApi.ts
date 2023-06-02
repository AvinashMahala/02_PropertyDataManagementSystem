import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { User } from "../models/user";
import { IRentReceiptMetaDataDetailsInputModel, IRentReceiptMetaDataDetailsViewModel } from "../models/rentReceiptMetaDataDetails";


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

//GetAllRentReceiptMetaDataDetails
export async function getAllRentReceiptMetaDataDetails():Promise<IRentReceiptMetaDataDetailsViewModel[]>{
    const response=await apiCall("/api/rentReceiptMetaDataDetails/all",{method:"GET"});
    const rentReceiptMetaDataDetailsArr=await response.json();
    return rentReceiptMetaDataDetailsArr;
}

//GetOneRentReceiptMetaDataDetails
export async function getOneRentReceiptMetaDataDetails(Id:string):Promise<IRentReceiptMetaDataDetailsViewModel>{
    const response=await apiCall("/api/rentReceiptMetaDataDetails/"+Id,{method:"GET"});
    const rentReceiptMetaDataDetails=await response.json();
    return rentReceiptMetaDataDetails;
}

//CreateRentReceiptMetaDataDetails
export async function createRentReceiptMetaDataDetails(rentReceiptMetaDataDetails:IRentReceiptMetaDataDetailsInputModel):Promise<IRentReceiptMetaDataDetailsViewModel>{
    const response=await apiCall("/api/rentReceiptMetaDataDetails/create",{
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
export async function updateRentReceiptMetaDataDetails(Id:string,rentReceiptMetaDataDetails:IRentReceiptMetaDataDetailsInputModel):Promise<IRentReceiptMetaDataDetailsViewModel>{
    const response=await apiCall("/api/rentReceiptMetaDataDetails/update/"+Id,{
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
export async function deleteRentReceiptMetaDataDetails(Id:string){
    await apiCall("/api/rentReceiptMetaDataDetails/delete/"+Id,{method:"DELETE"});
}





