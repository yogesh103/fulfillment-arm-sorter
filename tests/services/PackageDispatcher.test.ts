import { PackageDispatcher } from '../../src/services/PackageDispatcher';
import { PackageItem } from '../../src/models/PackageItem';
import { Stack } from '../../src/models/Stack';

describe('PackageDispatcher (public API)', () => {
  test('constructor initializes empty stacks for all Stack enum values', () => {
    const d = new PackageDispatcher();
    const stacks = Object.values(Stack) as Stack[];

    for (const s of stacks) {
      expect(d.size(s)).toBe(0);
      expect(d.getStack(s)).toEqual([]);
    }
  });

  test('enqueue routes packages to correct stacks (STANDARD, SPECIAL, REJECTED)', () => {
    const d = new PackageDispatcher();

    const standard = new PackageItem(10, 10, 10, 1);
    const bulky = new PackageItem(150, 1, 1, 1);
    const rejected = new PackageItem(100, 100, 100, 20);

    expect(d.enqueue(standard)).toBe(Stack.STANDARD);
    expect(d.enqueue(bulky)).toBe(Stack.SPECIAL);
    expect(d.enqueue(rejected)).toBe(Stack.REJECTED);

    expect(d.size(Stack.STANDARD)).toBe(1);
    expect(d.size(Stack.SPECIAL)).toBe(1);
    expect(d.size(Stack.REJECTED)).toBe(1);
  });

  test('FIFO behavior: dequeue returns packages in enqueue order', () => {
    const d = new PackageDispatcher();
    const a = new PackageItem(10, 10, 10, 1);
    const b = new PackageItem(10, 10, 10, 2);

    d.enqueue(a);
    d.enqueue(b);

    const first = d.dequeue(Stack.STANDARD);
    const second = d.dequeue(Stack.STANDARD);

    expect(first).toBeDefined();
    expect(second).toBeDefined();
    if (first && second) {
      expect(first.mass).toBe(1);
      expect(second.mass).toBe(2);
    }
  });

  test('peek returns first element but does not remove it', () => {
    const d = new PackageDispatcher();
    const p = new PackageItem(10, 10, 10, 3);

    d.enqueue(p);
    const beforeSize = d.size(Stack.STANDARD);
    const peeked = d.peek(Stack.STANDARD);

    expect(peeked).toBeDefined();
    if (peeked) expect(peeked.mass).toBe(3);
    expect(d.size(Stack.STANDARD)).toBe(beforeSize);
  });

  test('getStack returns a shallow copy', () => {
    const d = new PackageDispatcher();
    const p = new PackageItem(10, 10, 10, 4);

    d.enqueue(p);
    const arr = d.getStack(Stack.STANDARD);
    expect(arr.length).toBe(1);

    arr.pop();

    // Internal stack should remain unchanged
    expect(d.size(Stack.STANDARD)).toBe(1);
  });

  test('clear empties the specified stack', () => {
    const d = new PackageDispatcher();
    d.enqueue(new PackageItem(10, 10, 10, 1));
    expect(d.size(Stack.STANDARD)).toBe(1);

    d.clear(Stack.STANDARD);
    expect(d.size(Stack.STANDARD)).toBe(0);
  });
});

