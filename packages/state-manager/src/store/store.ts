import {defaultHandle} from "./handler"
import {callbcakType, actionCallbackType, StoreType} from "./types"




export default class StateStore{
    param:StoreType
    state:any
    callbacks :callbcakType[]
    name:string
    
    constructor(param:StoreType){
        this.name = param.name;
        this.param = param;
        this.state = new Proxy ((param.state || {}),defaultHandle(this));
        this.callbacks = param.callbacks || [];
    }
    
    dispatch(actionCallback:actionCallbackType, payload){
        this.state = actionCallback(this.state, payload);
        return this.state;
    }
    subscribe(fnparam:callbcakType){
        this.callbacks.push(fnparam);
    }
   

}





