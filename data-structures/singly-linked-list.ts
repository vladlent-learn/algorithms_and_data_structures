class Node<T> {
  next = null;
  constructor(public value: T) {}
}

export class SinglyLinkedList<T> {
  head: Node<T> = null;
  tail: Node<T> = null;
  length = 0;
  constructor() {}

  push(value: T): this {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(): T {
    if (this.length === 0 || !this.head) {
      return undefined;
    }

    let currentNode = this.head;
    let prevToLastNode: Node<T>;
    let lastNode: Node<T>;

    while (currentNode) {
      if (!currentNode.next) {
        lastNode = currentNode;
        break;
      }

      prevToLastNode = currentNode;
      currentNode = currentNode.next;
    }

    prevToLastNode.next = null;
    this.tail = prevToLastNode;
    this.length--;
    return lastNode.value;
  }
}

const list = new SinglyLinkedList<any>();
list.push('1').push(2).push(23);

console.log(list);
console.log(list.pop());
