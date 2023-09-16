import { User } from "../models/user";
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

async function fetchData(
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

export interface SignUpCredentials{
    username: string,
    email: string,
    password: string,
    role: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    address: string,
    city: string,
    state: string,
    zip_code: string,
    country: string,
    is_active: boolean,
    is_verified: boolean,
    is_deleted: boolean,
    communication_preferences: string,
    
}

export async function signUp(credentials: SignUpCredentials): Promise<User>{
    const response = await fetchData(customAPIBaseUrl,"/api/users/signup",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
}



export async function fetchUsers(): Promise<User[]>{
    const response=await fetchData(customAPIBaseUrl,"/api/users/all",{method:"GET"});
    return response.json();
}


// export interface NoteInput{
//     title: string,
//     text?: string,
// }

// export async function createNote(note: NoteInput):Promise<Note>{
//     const response = await fetchData("/api/notes",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify(note),
//     });
//     return response.json();
// }


// export async function updateNote(noteId: string, note: NoteInput): Promise<Note>{
//     const response = await fetchData("/api/notes/"+noteId,{
//         method:"PATCH",
//         headers:{
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify(note),
//     });
//     return response.json();
// }



export async function deleteUser(userId: string){
    await fetchData(customAPIBaseUrl,"/api/users/"+userId, {method: "DELETE"});
}




// export async function getLOggedInUser(): Promise<User>{
//     const response = await fetchData("/api/users",{method: "GET"});
//     return response.json();
// }

// export interface SignUpCredentials{
//     username: string,
//     email: string,
//     password: string,
//     role: string,
//     first_name: string,
//     last_name: string,
//     phone_number: string,
//     address: string,
//     city: string,
//     state: string,
//     zip_code: string,
//     country: string,
//     is_active: boolean,
//     is_verified: boolean,
//     is_deleted: boolean,
//     created_at: Date,
//     updated_at: Date,
//     deleted_at: Date,
//     communication_preferences: string,
    
// }

export interface UserInput{
    _id: string,
    username: string,
    email: string,
    password: string,
    role: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    address: string,
    city: string,
    state: string,
    zip_code: string,
    country: string,
    is_active: boolean,
    is_verified: boolean,
    is_deleted: boolean,
    communication_preferences: string,
}




export async function updateUser(_id: string, user: UserInput): Promise<User>{
    const response = await fetchData(customAPIBaseUrl,"/api/users/"+_id,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
    });
    return response.json();
}
