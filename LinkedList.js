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

/* Given a key, deletes all occurrence of the given key in linked list */
LinkedList.prototype.deleteAllKey = function(key) {
  let temp = this.head;
  let prev = null;
  while(temp && temp.value == key) {
    this.head = temp.next;
    temp = temp.next;
  }
  while(temp) {
    while(temp && temp.value != key) {
      prev = temp;
      temp = temp.next;
    }
    if(temp) {
      prev.next = temp.next;
      temp = prev.next;
    }
  }
}

// Function to delete the nth node from the end of the given linked list

LinkedList.prototype.deleteNthFromEnd = function(n) {
  let fast = this.head;
  let slow = this.head;
  let count = 0;
  let stop = false;
  while(fast && count!=n) {
    if(fast.next ==  null) {
      if(count == n-1) {
        this.head = this.head.next;
        stop = true;
      }
    }
    fast = fast.next;
    count++;
  }
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  if(!stop) {
    slow.next = slow.next.next;
  }
  
}

// Merge two sorted linked lists and return it as a new sorted list.
LinkedList.prototype.sortedMerge = function(l1, l2) {
  let dummyNode = new Node(0, null);
  let tail = dummyNode;
  debugger;
  while(l1 && l2) {
    if(l1.value < l2.value) {
      tail.next = l1;
      tail = tail.next;
      l1 = l1.next;
    } else {
      tail.next = l2;
      tail = tail.next;
      l2 = l2.next;
    }
  }
  // the exhausted list will be null
  tail.next = l1 || l2;
  return dummyNode.next;
}
let l1 = new LinkedList();
let l2 = new LinkedList();
/*ll.addAtFront(5);
ll.addAtFront(3);
ll.addAfter(8, ll.head);
//3 -> 8 -> 5
ll.addAtEnd(12);
ll.addAtEnd(8)
//3 -> 8 -> 5 -> 12 -> 8

//ll.deleteKey(8); // 3 -> 5 -> 12 -> 8
ll.deleteAllKey(8); // 3 -> 5 -> 12*/

l1.addAtEnd(1);
l1.addAtEnd(2);
l1.addAtEnd(4);
l2.addAtEnd(1);
l2.addAtEnd(3);
l2.addAtEnd(4);

let ll = new LinkedList();
let newLl = ll.sortedMerge(l1.head, l2.head);
console.log(newLl)