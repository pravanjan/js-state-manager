"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processCallBack = void 0;
var processCallBack = function (context, state) {
    context.callbacks.forEach(function (callback) {
        callback(state);
    });
};
exports.processCallBack = processCallBack;
//# sourceMappingURL=callbackHandler.js.map