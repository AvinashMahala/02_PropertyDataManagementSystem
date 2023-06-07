import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { User } from "../models/user";
import { IRentDetailsInputModel, IRentDetailsViewModel } from "../models/allRentDetailsModel";


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

//getAllRentDetails
export async function RetrieveAllRecords():Promise<IRentDetailsViewModel[]>{
    const response=await apiCall("/api/rent/all",{method:"GET"});
    const rentDetailsArr=await response.json();
    return rentDetailsArr;
}

//getOneRentDetails
export async function RetrieveOneRecord(rentId:string):Promise<IRentDetailsViewModel>{
    const response=await apiCall("/api/rent/"+rentId,{method:"GET"});
    const rentDetails=await response.json();
    return rentDetails;
}

//createARentDetail
export async function CreateOneRecord(rentDetails:IRentDetailsInputModel):Promise<IRentDetailsInputModel>{
    const response=await apiCall("/api/rent/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(rentDetails)
    });
    const createdRentDetails=await response.json();
    return createdRentDetails;
}

//updateARentDetail
export async function UpdateOneRecord(rentId:string,rentDetails:IRentDetailsInputModel):Promise<IRentDetailsViewModel>{
    const response=await apiCall("/api/rent/update/"+rentId,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(rentDetails)
    });
    const updatedRentDetails=await response.json();
    return updatedRentDetails;
}

//deleteARentDetail
export async function DeleteOneRecord(rentId:string){
    await apiCall("/api/rent/delete/"+rentId,{method:"DELETE"});
}





