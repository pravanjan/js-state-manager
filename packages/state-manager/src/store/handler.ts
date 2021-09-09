import {processCallBack} from "./callbackHandler"
import { StoreType } from "./types";
export const defaultHandle =(context:StoreType)=>{
    return {
        set:(state ,key ,value)=>{
            console.log(key, "key and value ", value);
            if(Array.isArray(state) && key ==="length"){
                state[key] = value;
                return  true;

            }
            else {
                state[key] = value;
                processCallBack(context, state);
                return  true;
            }
         }
    };
}

