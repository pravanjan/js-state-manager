import { processCallBack } from "./callbackHandler";
export const defaultHandle = (context) => {
    return {
        get: (state, key, value) => {
            if (key === "splice") {
                const origMethod = state[key];
                return function (...args) {
                    origMethod.apply(state, args);
                    processCallBack(context, state);
                };
            }
            return state[key];
        },
        set: (state, key, value) => {
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
        deleteProperty(state, key) {
            if (key in state) {
                delete state[key];
                processCallBack(context, state);
                return true;
            }
        }
    };
};
//# sourceMappingURL=handler.js.map