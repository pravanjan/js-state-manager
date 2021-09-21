export interface StoreType {
    name: string;
    state: any;
    callbacks?: callbcakType[];
}
export declare type callbcakType = ((state: any) => void);
export declare type actionCallbackType = ((state: any, payload: string | number) => any);
