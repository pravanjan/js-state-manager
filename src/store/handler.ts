import {processCallBack} from "./callbackHandler"
import  Store  from "./store";
export const defaultHandle =(context:Store)=>{
    return {
        set:(state ,key ,value)=>{
            
            if(Array.isArray(state) && key ==="length"){
                state[key] = value;
                return  true;

            }
            else {
                state[key] = value;
                processCallBack(context, state);
                return  true;
            }
         },
         deleteProperty (state, prop){
             if(prop in state){
                 delete state[prop];
                 processCallBack(context, state);
                 return true;
             }

         }
    };
}

