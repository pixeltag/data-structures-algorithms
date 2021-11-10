
function Node(value) {
    this.data = value || null;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = new Node();
    // this.tail = this.head;
}

SinglyLinkedList.prototype.insertNode = function (value) {
    let newHead = new Node(value);
    let oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    return this.head;
}


function main(_listCount, _listItems) {
  const llistCount = parseInt(_listCount, 10);
  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(_listItems[i], 10);
    llist.insertNode(llistItem);
  }
  printLinkedList(llist.head);
}



function printLinkedList(head) {
    let node = head;
    let count = 0;
    while (node) {
        if (node.data !== null) console.log(node.data);
        node = node.next;
        count++;
    }
}

main(6, [16, 13,12,11,5,3]);
