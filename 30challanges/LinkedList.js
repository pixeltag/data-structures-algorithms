function linkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

linkedList.prototype.addToTail = function (value) {
    var newNode = {
        value: value,
        next: null
    };
    if (!this.head) {
        this.head = newNode;
    } else {
        this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
}

linkedList.prototype.removeDuplicates = function (headNode) {
    var current = headNode;
    var previous = null;
    var hash = {};
    while (current) {
        if (hash[current.value]) {
            previous.next = current.next;

        } else {
            hash[current.value] = true;
            previous = current;
        }
        current = current.next;
    }
    return headNode;
}



const newList = new linkedList();
newList.addToTail(1);
newList.addToTail(2);
newList.addToTail(2);
newList.addToTail(3);
newList.addToTail(3);
newList.addToTail(4);

// console.log(newList);

;

console.log(newList.removeDuplicates(newList.head), newList.tail, newList.length);
