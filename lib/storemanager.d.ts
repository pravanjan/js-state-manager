import { default as Store } from "./store/store";
import { StoreType } from "./store/types";
export declare class StoreManager {
    private static _instance;
    private storeMap;
    private constructor();
    createStore(store: StoreType): Store;
    getStore(name: string): Store;
    static getInstance(): StoreManager;
}
