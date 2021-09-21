import { defaultHandle } from "./handler";
var StateStore = /** @class */ (function () {
    function StateStore(param) {
        this.name = param.name;
        this.state = new Proxy((param.state || {}), defaultHandle(this));
        this.callbacks = param.callbacks || [];
    }
    StateStore.prototype.dispatch = function (actionCallback, payload) {
        this.state = actionCallback(this.state, payload);
        return this.state;
    };
    StateStore.prototype.subscribe = function (fnparam) {
        this.callbacks.push(fnparam);
    };
    return StateStore;
}());
export default StateStore;
//# sourceMappingURL=store.js.map