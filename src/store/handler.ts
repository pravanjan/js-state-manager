import {processCallBack} from "./callbackHandler"
import { StoreType } from "./types";
export const defaultHandle =(context:StoreType)=>{
    return {
        set:(state ,key ,value)=>{
            state[key] = value;
            processCallBack(context, state);
            return  true;
        }
    };
}

