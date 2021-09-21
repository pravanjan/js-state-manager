import { callbcakType, actionCallbackType, StoreType } from "./types";
export default class StateStore {
    state: any;
    callbacks: callbcakType[];
    name: string;
    constructor(param: StoreType);
    dispatch(actionCallback: actionCallbackType, payload: any): any;
    subscribe(fnparam: callbcakType): void;
}
