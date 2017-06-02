import { notOk, ok } from 'ptz-assert';
import * as P from './index';
describe('isNotNilOrEmpty', () => {
    it('false for null', () => {
        notOk(P.isNotNilOrEmpty(null));
    });
    it('false for undefined', () => {
        notOk(P.isNotNilOrEmpty(undefined));
    });
    it('false for empty', () => {
        notOk(P.isNotNilOrEmpty([]));
    });
    it('true for NOT empty', () => {
        ok(P.isNotNilOrEmpty([1]));
    });
    it('true for NOT empty string', () => {
        ok(P.isNotNilOrEmpty('a'));
    });
});
//# sourceMappingURL=isNotNilOrEmpty.test.js.map