import { equal } from 'ptz-assert';
import * as P from './index';

describe('log', () => {
    it('return same obj', () => {
      const obj = { a: 'test' };
      const loggedObj = P.log(obj);
      equal(obj, loggedObj);
    });
});
