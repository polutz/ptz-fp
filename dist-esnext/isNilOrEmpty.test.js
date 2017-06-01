import { notOk, ok } from 'ptz-assert';
import { isNilOrEmpty } from './index';
describe('isNilOrEmpty', () => {
    it('true for null', () => {
        ok(isNilOrEmpty(null));
    });
    it('true for undefined', () => {
        ok(isNilOrEmpty(undefined));
    });
    it('true for empty', () => {
        ok(isNilOrEmpty([]));
    });
    it('false for NOT empty', () => {
        notOk(isNilOrEmpty([1]));
    });
    it('false for NOT empty string', () => {
        notOk(isNilOrEmpty('a'));
    });
});
//# sourceMappingURL=isNilOrEmpty.test.js.map