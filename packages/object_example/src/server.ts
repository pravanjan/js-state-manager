/* Api call helper internal use javascript fetch to call the api 
*/

export const GET=(url:string, header:string[]=[]):Promise<any>=>{
    console.log("**** makig get call *** ")
    return fetch(url).then(respose=> respose.json());

}



