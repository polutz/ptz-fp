import { equal } from 'ptz-assert';
import R from 'ramda';
import * as P from './index';
describe('log', () => {
    it('return same obj', () => {
        const a = (x) => x;
        const b = (x) => x;
        const pipe = R.pipe(a, P.log('after a'), b, P.log('after b'));
        const obj = { a: 'test' };
        const loggedObj = pipe(obj);
        equal(obj, loggedObj);
    });
});
//# sourceMappingURL=log.test.js.map