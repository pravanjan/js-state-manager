import { StoreType } from "./types"        




export const processCallBack = (context:StoreType , state)=>{
    context.callbacks.forEach(callbackObj=>{
        callbackObj.callbacks.apply(context,[state, ...callbackObj.args]);
    });
}