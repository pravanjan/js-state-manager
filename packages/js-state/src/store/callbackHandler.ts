import { StoreType } from "./types"        




export const processCallBack = (context:StoreType , state)=>{
    context.callbacks.forEach(callback=>{
        callback(state)
    });
}