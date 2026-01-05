import {PackageItem} from "../../src/models/PackageItem";

describe('PackageItem', () => {
    test('constructor rejects negative, NaN or infinite values', () => {
        expect(() => new PackageItem(-1, 1, 1, 1)).toThrow(TypeError);
        expect(() => new PackageItem(1, NaN, 1, 1)).toThrow(TypeError);
        expect(() => new PackageItem(1, 1, Infinity, 1)).toThrow(TypeError);
    });

    test('getVolume returns correct product', () => {
        const p = new PackageItem(10, 20, 30, 1);
        expect(p.getVolume()).toBe(10 * 20 * 30);
    });

    test('isBulky is true when volume >= 1_000_000', () => {
        const p = new PackageItem(100, 100, 100, 1); // volume == 1_000_000
        expect(p.isBulky()).toBeTruthy();
    });

    test('isBulky is true when any dimension >= 150', () => {
        expect(new PackageItem(150, 1, 1, 1).isBulky()).toBeTruthy();
        expect(new PackageItem(1, 150, 1, 1).isBulky()).toBeTruthy();
        expect(new PackageItem(1, 1, 150, 1).isBulky()).toBeTruthy();
    });

    test('isBulky is false for small packages', () => {
        expect(new PackageItem(10, 10, 10, 1).isBulky()).toBeFalsy();
        // volume just under threshold
        expect(new PackageItem(100, 100, 99, 1).isBulky()).toBeFalsy();
    });

    test('isHeavy uses mass >= 20 kg', () => {
        expect(new PackageItem(10, 10, 10, 20).isHeavy()).toBeTruthy();
        expect(new PackageItem(10, 10, 10, 19.999).isHeavy()).toBeFalsy();
    });
});
