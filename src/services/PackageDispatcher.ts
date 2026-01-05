import { PackageItem } from "../models/PackageItem";
import { PackageSorter } from "./PackageSorter";
import { Stack } from "../models/Stack";

export class PackageDispatcher {
    private stacks: Record<Stack, PackageItem[]>;

    constructor() {
        //Todo use the Stack enum to initialize stacks
        this.stacks = {
            [Stack.STANDARD]: [],
            [Stack.SPECIAL]: [],
            [Stack.REJECTED]: [],
        };
    }

    enqueue(pkg: PackageItem): Stack {
        const stack = PackageSorter.sort(pkg.width, pkg.height, pkg.length, pkg.mass);
        this.stacks[stack].push(pkg);
        return stack;
    }


    dequeue(stack: Stack): PackageItem | undefined {
        return this.stacks[stack].shift();
    }

    peek(stack: Stack): PackageItem | undefined {
        return this.stacks[stack][0];
    }

    getStack(stack: Stack): PackageItem[] {
        return [...this.stacks[stack]];
    }

    size(stack: Stack): number {
        return this.stacks[stack].length;
    }

    clear(stack: Stack): void {
        this.stacks[stack] = [];
    }
}

