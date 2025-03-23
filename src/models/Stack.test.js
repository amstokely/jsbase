import Stack from './Stack.js';

describe('My Stack', () => {
    let stack;
    let value;

    beforeEach(() => {
        stack = new Stack();
        value = 1;
    });

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.isEmpty()).toBe(true);
    });

    it('can push to the top', () => {
        stack.push(value);
        expect(stack.top).toBe(0);
        expect(stack.isEmpty()).toBe(false);
    });

    it('can peek the top', () => {
        stack.push(value);
        expect(stack.peek()).toBe(value);
    });

    it('can pop the top', () => {
        stack.push(value);
        expect(stack.peek()).toBe(value);
        expect(stack.pop()).toBe(value);
        expect(stack.isEmpty()).toBe(true);
    });
});
