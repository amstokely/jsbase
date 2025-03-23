import Stack from './Stack';

describe('My Stack', () => {
    let stack: Stack<number>;
    let value: number

    beforeEach(() => {
        stack = new Stack();
        value = 1;
    });

    it('is created empty', () => {
        expect(stack.isEmpty()).toBe(true);
    });

    it('can push to the top', () => {
        stack.push(value);
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
