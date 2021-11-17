function Node(value) {
    this.data = value || null;
    this.next = null;
}

List.prototype.addNode = function(head, data) {
       //complete this method
        //   console.log(head , data)
        let newHead = new Node(data);
        let oldHead = head;
        if(head == null) {
            oldHead = newHead;
            this.head = oldHead;
            return this.head;
        }
        // console.log(oldHead)
            oldHead.next = newHead;
            this.head = oldHead;
            return this.head;
}

function List() {
    this.head = new Node()
}


function main(_count, _data) {
    let head = null;
    let c = 0;
    return function rec(head) {
        if (c === _count) {
            return head;
        } else {
            c += 1;
            let newHead;
            newHead = newList.addNode(head, c);
            console.log(newHead);
            return rec(newHead);
        }
    }
}




const newList = new List();

main(4, [2, 3, 4, 1])()
// let head = newList.addNode(null, 2)
// head = newList.addNode(head, 3);
// head = newList.addNode(head, 4)
// head = newList.addNode(head, 1);
