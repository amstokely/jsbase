class Stack<T> {
    private items: { [key: number]: T };
    private top: number;

    constructor() {
        this.items = {};
        this.top = -1;
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    push(value: T): void {
        this.top += 1;
        this.items[this.top] = value;
    }

    peek(): T | null {
        if (this.isEmpty()) return null;
        return this.items[this.top];
    }

    pop(): T | null {
        if (this.isEmpty()) return null;
        const value = this.items[this.top];
        delete this.items[this.top];
        this.top -= 1;
        return value;
    }
}

export default Stack;
