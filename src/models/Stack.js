class Stack {
    constructor() {
        this.items = {};
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.top];
    }

    pop() {
        if (this.isEmpty()) return null;
        const value = this.items[this.top];
        delete this.items[this.top];
        this.top -= 1;
        return value;
    }
}

export default Stack;