export function formatColumnFromArr(searchIdField:string,cellValue:string,objectArr:any,searchValueField:any):string{
    let result = "";
    objectArr.forEach(
        (obj:any)=>{
            if(obj[searchIdField]===cellValue){
                result = obj[searchValueField];
            }
        }
    )
    return result;
}

  