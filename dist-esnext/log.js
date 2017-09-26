/**
 * run console.log() and return the same obj
 * @param  {any} o any object
 * @return {any}   same object
 */
export const log = (...args) => (obj) => {
    console.log(...args, obj);
    return obj;
};
//# sourceMappingURL=log.js.map