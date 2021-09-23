import { processCallBack } from "./callbackHandler";
export var defaultHandle = function (context) {
    return {
        get: function (state, key, value) {
            if (key === "splice") {
                var origMethod_1 = state[key];
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    processCallBack(context, state);
                    origMethod_1.apply(state, args);
                };
            }
            return state[key];
        },
        set: function (state, key, value) {
            if (Array.isArray(state) && key === "length") {
                state[key] = value;
                return true;
            }
            else {
                state[key] = value;
                processCallBack(context, state);
                return true;
            }
        },
        deleteProperty: function (state, key) {
            if (key in state) {
                delete state[key];
                processCallBack(context, state);
                return true;
            }
        }
    };
};
//# sourceMappingURL=handler.js.map