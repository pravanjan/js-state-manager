import { defaultHandle } from "./handler";
export default class StateStore {
    state;
    callbacks;
    name;
    constructor(param) {
        this.name = param.name;
        this.state = new Proxy((param.state || {}), defaultHandle(this));
        this.callbacks = param.callbacks || [];
    }
    dispatch(actionCallback, payload) {
        this.state = actionCallback(this.state, payload);
        return this.state;
    }
    subscribe(fnparam) {
        this.callbacks.push(fnparam);
    }
}
//# sourceMappingURL=store.js.map