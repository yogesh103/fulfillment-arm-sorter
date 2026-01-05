export class PackageItem {
    readonly width: number;
    readonly height: number;
    readonly length: number;
    readonly mass: number;
    static readonly BULKY_VOLUME_THRESHOLD = 1_000_000; //cm3
    static readonly HEAVY_MASS_THRESHOLD = 20; //kg
    static readonly BULKY_DIMENSION_THRESHOLD = 150; //cm

    constructor(width: number, height: number, length: number, mass: number) {
        if (![width, height, length, mass].every(value => Number.isFinite(value) && value >= 0)) {
            throw new TypeError('All dimensions and mass must be non-negative finite numbers');
        }
        this.width = width;
        this.height = height;
        this.length = length;
        this.mass = mass;
    }

    getVolume(): number {
        return this.width * this.height * this.length;
    }

    isBulky(): boolean {
        return this.getVolume() >= PackageItem.BULKY_VOLUME_THRESHOLD ||
               this.width >= PackageItem.BULKY_DIMENSION_THRESHOLD ||
               this.height >= PackageItem.BULKY_DIMENSION_THRESHOLD ||
               this.length >= PackageItem.BULKY_DIMENSION_THRESHOLD;
    }

    isHeavy(): boolean {
        return this.mass >= PackageItem.HEAVY_MASS_THRESHOLD;
    }
}