import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { User } from "../models/user";
import { IFlatInputModel, IFlatViewModel } from "../models/flatModel";


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

//getAllFlats
export async function getAllFlats():Promise<IFlatViewModel[]>{
    const response=await apiCall("/api/flats/all",{method:"GET"});
    const flats=await response.json();
    return flats;
}

//getOneFlat
export async function getOneFlat(flatId:string):Promise<IFlatViewModel>{
    const response=await apiCall("/api/flats/"+flatId,{method:"GET"});
    const flatDetails=await response.json();
    return flatDetails;
}

//createAFlat
export async function createAFlat(flatDetails:IFlatInputModel):Promise<IFlatViewModel>{
    const response=await apiCall("/api/flats/create",{
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
export async function updateFlatDetails(flatId:string,flatDetails:IFlatInputModel):Promise<IFlatViewModel>{
    const response=await apiCall("/api/flats/update/"+flatId,{
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
export async function deleteFlatDetails(flatId:string){
    await apiCall("/api/flats/delete/"+flatId,{method:"DELETE"});
}





