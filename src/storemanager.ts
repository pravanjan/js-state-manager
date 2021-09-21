import {default as Store} from "./store/store";
import { StoreType } from "./store/types";

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Store Manager provide signle instance to manager store  /////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export  class StoreManager{
    private  static  _instance:StoreManager; 
    private storeMap:Map<string,Store>
    private constructor(storeMap:Map<string,Store>){
        this.storeMap = storeMap;
    }
   
    /*
     This method takes one  args Name of the store
      and validate returns the store if presents
     */ 
    createStore(store:StoreType):Store{
        let mystore = new Store(store);
        this.storeMap.set(mystore.name, mystore);
        return mystore;

    }
    /*
     This method takes one  args Name of the store
      and validate returns the store if presents
     */ 
    getStore(name:string ):Store{
        return this.storeMap.has(name)?this.storeMap.get(name):null;
    }
    /*
     This method takes no args and validate is there a instace available per page
     */ 
    public static getInstance(){
        this._instance = this._instance || new this(new Map<string,Store>())
        return this._instance;
    }
}