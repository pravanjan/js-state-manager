import {processCallBack} from "./callbackHandler"
import  Store  from "./store";
export const defaultHandle =(context:Store)=>{
    return {
        get:(state, key, value)=>{
            if(key ==="splice"){
                const origMethod = state[key];
                return function(...args){
                    origMethod.apply(state, args);
                    processCallBack(context, state);

                }
            }
            return state[key];

        }, 
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
         deleteProperty (state, key){
             if(key in state){
                 delete state[key];
                 processCallBack(context, state);
                 return true;
             }

         }
    };
}

