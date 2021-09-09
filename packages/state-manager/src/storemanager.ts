import {default as Store} from "./store/store";

import { StoreType } from "./store/types";

export default class StoreManager{
    storeList:StoreType[]
    constructor(){
        this.storeList = []

    }
   
    createStore(store:StoreType){
        let mystore = new Store(store);
        this.storeList.push(mystore)
        return mystore;

    }
    getStore(name:string ){
        this.storeList.forEach(store =>{
            if(store.name === name){
                return store 
            }
        })
    }
}