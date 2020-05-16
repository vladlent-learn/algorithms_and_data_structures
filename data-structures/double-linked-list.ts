export class Node {
  prev: Node = null;
  next: Node = null;
  constructor(public value: any) {}
}

export class DoubleLinkedList {
  head: Node = null;
  tail: Node = null;
  length = 0;

  constructor() {}

  push(value: any): this {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop(): Node {
    if (this.length === 0) {
      return undefined;
    }
    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
    }
    this.length--;

    return oldTail;
  }
}
