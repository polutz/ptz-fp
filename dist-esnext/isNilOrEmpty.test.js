import { notOk, ok } from 'ptz-assert';
import * as P from './index';
describe('isNilOrEmpty', () => {
    it('true for null', () => {
        ok(P.isNilOrEmpty(null));
    });
    it('true for undefined', () => {
        ok(P.isNilOrEmpty(undefined));
    });
    it('true for empty', () => {
        ok(P.isNilOrEmpty([]));
    });
    it('false for NOT empty', () => {
        notOk(P.isNilOrEmpty([1]));
    });
    it('false for NOT empty string', () => {
        notOk(P.isNilOrEmpty('a'));
    });
});
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
//# sourceMappingURL=isNilOrEmpty.test.js.map