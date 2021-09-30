import { default as Store } from "./store/store";
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Store Manager provide signle instance to manager store  /////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
export class StoreManager {
    static _instance;
    storeMap;
    constructor(storeMap) {
        this.storeMap = storeMap;
    }
    /*
     This method takes one  args Name of the store
      and validate returns the store if presents
     */
    createStore(store) {
        let mystore = new Store(store);
        this.storeMap.set(mystore.name, mystore);
        return mystore;
    }
    /*
     This method takes one  args Name of the store
      and validate returns the store if presents
     */
    getStore(name) {
        return this.storeMap.has(name) ? this.storeMap.get(name) : null;
    }
    /*
     This method takes no args and validate is there a instace available per page
     */
    static getInstance() {
        this._instance = this._instance || new this(new Map());
        return this._instance;
    }
}
//# sourceMappingURL=storemanager.js.map