import { default as Store } from "./store/store";
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Store Manager provide signle instance to manager store  /////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var StoreManager = /** @class */ (function () {
    function StoreManager(storeMap) {
        this.storeMap = storeMap;
    }
    /*
     This method takes one  args Name of the store
      and validate returns the store if presents
     */
    StoreManager.prototype.createStore = function (store) {
        var mystore = new Store(store);
        this.storeMap.set(mystore.name, mystore);
        return mystore;
    };
    /*
     This method takes one  args Name of the store
      and validate returns the store if presents
     */
    StoreManager.prototype.getStore = function (name) {
        return this.storeMap.has(name) ? this.storeMap.get(name) : null;
    };
    /*
     This method takes no args and validate is there a instace available per page
     */
    StoreManager.getInstance = function () {
        this._instance = this._instance || new this(new Map());
        return this._instance;
    };
    return StoreManager;
}());
export { StoreManager };
//# sourceMappingURL=storemanager.js.map