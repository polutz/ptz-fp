import { log as ptzLog } from 'ptz-log';

/**
 * run console.log() and return the same obj
 * @param  {any} o any object
 * @return {any}   same object
 */
export const log = (...args) => (obj) => {
  ptzLog(...args, obj);
  return obj;
};
