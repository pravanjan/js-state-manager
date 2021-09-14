import {default as Store} from "./store/store";

import { StoreType } from "./store/types";

export  class StoreManager{
    private  static  _instance:StoreManager; 
    private storeMap:Map<string,Store>
    constructor(storeMap:Map<string,Store>){
        this.storeMap = storeMap;

    }
   
    createStore(store:StoreType):Store{
        let mystore = new Store(store);
        this.storeMap.set(mystore.name, mystore);
        return mystore;

    }
    getStore(name:string ):Store{
        return this.storeMap.has(name)?this.storeMap.get(name):null;
    }
    public static getInstance(){
        this._instance = this._instance || new this(new Map<string,Store>())
        return this._instance;
    }
}