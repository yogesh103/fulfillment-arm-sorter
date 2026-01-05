import {PackageSorter} from "../../src/services/PackageSorter";
import {Stack} from "../../src/models/Stack";

describe('PackageSorter.sort', () => {
    test('returns STANDARD for non-bulky non-heavy package', () => {
        expect(PackageSorter.sort(10, 10, 10, 1)).toBe(Stack.STANDARD);
    });

    test('returns SPECIAL for bulky only packages', () => {
        expect(PackageSorter.sort(150, 1, 1, 1)).toBe(Stack.SPECIAL);
        expect(PackageSorter.sort(100, 100, 100, 1)).toBe(Stack.SPECIAL);
    });

    test('returns SPECIAL for heavy only packages', () => {
        expect(PackageSorter.sort(10, 10, 10, 20)).toBe(Stack.SPECIAL);
    });

    test('returns REJECTED when both bulky and heavy', () => {
        expect(PackageSorter.sort(100, 100, 100, 20)).toBe(Stack.REJECTED);
        expect(PackageSorter.sort(150, 150, 150, 20)).toBe(Stack.REJECTED);
    });

    test('throws when inputs are invalid (propagates PackageItem validation)', () => {
        expect(() => PackageSorter.sort(-1, 1, 1, 1)).toThrow();
        expect(() => PackageSorter.sort(1, NaN, 1, 1)).toThrow();
    });
});

