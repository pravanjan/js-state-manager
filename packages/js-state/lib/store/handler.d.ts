import { StoreType } from "./types";
export declare const defaultHandle: (context: StoreType) => {
    set: (state: any, key: any, value: any) => boolean;
    deleteProperty(state: any, prop: any): boolean;
};
