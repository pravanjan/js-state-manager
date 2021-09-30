export const processCallBack = (context, state) => {
    context.callbacks.forEach(callback => {
        callback(state);
    });
};
//# sourceMappingURL=callbackHandler.js.map