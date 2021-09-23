import Store from "./store";
export declare const defaultHandle: (context: Store) => {
    get: (state: any, key: any, value: any) => any;
    set: (state: any, key: any, value: any) => boolean;
    deleteProperty(state: any, key: any): boolean;
};
