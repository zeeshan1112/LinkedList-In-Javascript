function LinkedList() {
  this.head = null;
};

function Node(value, next) {
  this.value = value;
  this.next = next;
}

LinkedList.prototype.addAtFront = function(value) {
  let newNode =  new Node(value, this.head);
  if(!this.head) {
    this.head = newNode;
  } else {
    newNode.next = this.head;
  }
  this.head = newNode;
}

LinkedList.prototype.addAfter = function(value, prevNode) {
  let currentNode = this.head;
  while(currentNode) {
    if(currentNode.value === prevNode.value) {
      let newNode = new Node(value, prevNode.next);
      prevNode.next = newNode;
    }
    currentNode = currentNode.next;
  }
}

LinkedList.prototype.addAtEnd = function(value) {
  let newNode = new Node(value, null);
  let currentNode = this.head;
  if(!this.head) {
    this.head = newNode;
  }
  while(currentNode) {
    if(currentNode.next === null) {
      currentNode.next = newNode;
      break;
    }
    currentNode = currentNode.next;
  }
}

//Given a ‘key’, delete the first occurrence of this key in linked list.
LinkedList.prototype.deleteKey = function(key) {
    let temp = this.head;
    let prev = null;
    if(temp && temp.value == key) {
      this.head = temp.next;
    } else {
      while(temp && temp.value != key) {
        prev = temp;
        temp = temp.next;
      }
      if(temp) {
        prev.next = temp.next;
      }

    }

}
let ll = new LinkedList();
ll.addAtFront(5);
ll.addAtFront(3);
ll.addAfter(8, ll.head);
//3 -> 8 -> 5
ll.addAtEnd(12);
//3 -> 8 -> 5 -> 12

ll.deleteKey(22);
console.log(ll.head.next);