"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreManager = void 0;
var store_1 = require("./store/store");
var StoreManager = /** @class */ (function () {
    function StoreManager(storeMap) {
        this.storeMap = storeMap;
    }
    StoreManager.prototype.createStore = function (store) {
        var mystore = new store_1.default(store);
        this.storeMap.set(mystore.name, mystore);
        return mystore;
    };
    StoreManager.prototype.getStore = function (name) {
        return this.storeMap.has(name) ? this.storeMap.get(name) : null;
    };
    StoreManager.getInstance = function () {
        this._instance = this._instance || new this(new Map());
        return this._instance;
    };
    return StoreManager;
}());
exports.StoreManager = StoreManager;
//# sourceMappingURL=storemanager.js.map