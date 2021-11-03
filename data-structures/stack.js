function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}


// push to stack
Stack.prototype.push = function (value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return "Max capacity already reached. Remove element before adding a new one.";
}

// pop from stack
Stack.prototype.pop = function () {
    if (this._count === 0) {
        return "No element inside the stack. Add element before poping.";
    }
    const value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
}



const myStack = new Stack(5);

myStack.push('first');
console.log(myStack)
myStack.pop();
console.log(myStack);
