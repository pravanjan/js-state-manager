
/* Type declar file hold all different type for the store 
*/
export interface StoreType {
    name:string,
    state:any,
    callbacks?:callbcakType[]
}

/* Type declar callback function it take one input parameter that is state
 and does not return any value
*/
export type callbcakType ={
    callbacks: ((...param:any)=> void),
    args?:any
} ;

/* Type declar actioncallbackType  function it take one input parameter   state
 and payload what supopose to change inside the state and reurn an changed object
*/

export type actionCallbackType = ((state:any, payload:string|number)=> any);
    