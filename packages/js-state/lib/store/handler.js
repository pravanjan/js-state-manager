"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHandle = void 0;
var callbackHandler_1 = require("./callbackHandler");
var defaultHandle = function (context) {
    return {
        set: function (state, key, value) {
            console.log(key, "key and value ", value);
            if (Array.isArray(state) && key === "length") {
                state[key] = value;
                return true;
            }
            else {
                state[key] = value;
                (0, callbackHandler_1.processCallBack)(context, state);
                return true;
            }
        },
        deleteProperty: function (state, prop) {
            if (prop in state) {
                delete state[prop];
                (0, callbackHandler_1.processCallBack)(context, state);
                return true;
            }
        }
    };
};
exports.defaultHandle = defaultHandle;
//# sourceMappingURL=handler.js.map