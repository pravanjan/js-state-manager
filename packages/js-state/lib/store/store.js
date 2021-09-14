"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler_1 = require("./handler");
var StateStore = /** @class */ (function () {
    function StateStore(param) {
        this.name = param.name;
        this.state = new Proxy((param.state || {}), (0, handler_1.defaultHandle)(this));
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
exports.default = StateStore;
//# sourceMappingURL=store.js.map