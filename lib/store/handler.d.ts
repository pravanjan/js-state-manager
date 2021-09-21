import Store from "./store";
export declare const defaultHandle: (context: Store) => {
    set: (state: any, key: any, value: any) => boolean;
    deleteProperty(state: any, prop: any): boolean;
};
