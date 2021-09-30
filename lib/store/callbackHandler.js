export var processCallBack = function (context, state) {
    context.callbacks.forEach(function (callback) {
        callback(state);
    });
};
//# sourceMappingURL=callbackHandler.js.map