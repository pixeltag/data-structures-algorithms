/*

STACK
LIFO

Collection of elements with push and pop operations

*/



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


Stack.prototype.peek = function () {
    return this._storage[this._count - 1];
}


Stack.prototype.count = function () {
    return this._count;
}


// Create a contains method to check if a value is in the stack:
// myStack.contains('findme')
// => true/false
// What's the time complexity?

Stack.prototype.contains = function (str) {
      if (this._count === 0) {
        return "No element inside the stack. Add element before poping.";
      }
    let result;
    Object.keys(this._storage).find(key => {
        console.log(this._storage[key] , str);
        if (this._storage[key] === str) {
            result = true;
        } else {
            result = false;
        }
    })
    return result;
}

const myStack = new Stack(5);

myStack.push('Poolia IT');
myStack.push("Felmo DE");
myStack.push("Amazon Berlin");
myStack.push("VEITA");
myStack.push("ACCEDO");
myStack.push("Tatweer SA");
console.log(myStack)
myStack.pop();
console.log(myStack);
myStack.peek();
console.log("~~~~~~~~~~~~~~~~~~ STACK CONTAINS 'VEITA':" + myStack.contains("VEITA"));
console.log(myStack);
console.log('~~~~~~~~~~~~~~~~~~ STACK COUNT:' + myStack.count())


// 
// Implement a MinStack that has a min method which will return the minimum value in the stack in constant time.
//

function MinStack(capacity) {
    this._capacity = capacity;
    this._storage = {}
    this._count = 0;
    this._min = new Stack();
}

MinStack.prototype.push = function (value) {
    if (this._count < this._capacity) {
        if (this._min.peek() < value) {
            this._min.push(this._min.peek());
        } else {
            this._min.push(value)
        }
        this._storage[this._count++] = value;
        return this._count;
    }
  return "Max capacity already reached. Remove element before adding a new one.";
}

MinStack.prototype.pop = function () {
    this._min.pop();
    var value = this._storage[--this._count];
    delete this._storage[--this._count];
    if (this._count < 0) {
        this._count = 0
    }
    return value;
}

MinStack.prototype.peak = function () {
    return this._storage[this._count - 1];
}

MinStack.prototype.count = function () {
    return this._count;
}

MinStack.prototype.min = function () {
    return this._min.peek();
}

var MyMinStack = new MinStack(5);

MyMinStack.push("STOCKHOLM");
MyMinStack.push("BERLIN");
MyMinStack.push("AMSTERDAM");
MyMinStack.push("CAIRO");
MyMinStack.push("MANSOURA");
MyMinStack.push("PUDAPESTE");
MyMinStack.push("RIYADH");

console.log(MyMinStack)

MyMinStack.pop();
MyMinStack.pop();
MyMinStack.pop();
console.log(MyMinStack)