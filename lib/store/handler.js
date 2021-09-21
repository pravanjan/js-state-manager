import { processCallBack } from "./callbackHandler";
export var defaultHandle = function (context) {
    return {
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
        deleteProperty: function (state, prop) {
            if (prop in state) {
                delete state[prop];
                processCallBack(context, state);
                return true;
            }
        }
    };
};
//# sourceMappingURL=handler.js.map