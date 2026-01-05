import {PackageItem} from "../models/PackageItem";
import {Stack} from "../models/Stack";


export class PackageSorter {
    public static sort(width: number, height: number, length: number, mass: number): Stack {
        const packageItem = new PackageItem(width, height, length, mass);
        const isPackageHeavy = packageItem.isHeavy();
        const isPackageBulky = packageItem.isBulky();

        if (isPackageBulky && isPackageHeavy) {
            return Stack.REJECTED;
        }
        if (isPackageBulky || isPackageHeavy) {
            return Stack.SPECIAL;
        }
        return Stack.STANDARD;
    }
}