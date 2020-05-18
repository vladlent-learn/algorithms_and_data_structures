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
      oldTail.prev = null;
    }
    this.length--;

    return oldTail;
  }

  shift(): Node {
    if (this.length === 0) {
      return undefined;
    }
    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(value: any): this {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index: number): Node {
    if (index < 0 || index >= this.length) return undefined;

    let currentNode;
    if (index < this.length / 2) {
      currentNode = this.head;
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 2; i >= index; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }

  set(index: number, value: any): boolean {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index: number, value: any): boolean {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length - 1) return !!this.push(value);

    const newNode = new Node(value);
    const node = this.get(index);

    newNode.prev = node.prev;
    node.prev.next = newNode;
    newNode.next = node;

    this.length++;
    return true;
  }

  remove(index: number): Node {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    const beforeNode = node.prev;
    const nextNode = node.next;

    beforeNode.next = nextNode;
    nextNode.prev = beforeNode;

    node.next = node.prev = null;

    this.length--;
    return node;
  }
}
