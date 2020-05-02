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

  pop(): Node<T> {
    if (this.length === 0 || !this.head) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  unshift(value: T): this {
    const currentHead = this.head;
    this.head = new Node<T>(value);
    this.head.next = currentHead;

    if (!this.tail) {
      this.tail = this.head;
    }

    this.length++;

    return this;
  }

  shift(): Node<T> {
    if (this.length === 0 || !this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  get(index: number): Node<T> {
    if (index < 0 || index >= this.length) return undefined;

    let node = this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  }

  set(index: number, value: T): boolean {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index: number): Node<T> {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;

    this.length--;
    return nodeToRemove;
  }
}

const list = new SinglyLinkedList<any>();
// list.push('1').push(2);
console.log(list);
console.log(list.unshift(0).push(1).push(3));
console.log(list.insert(3, 2));
console.log(list);
console.log(list.remove(1));
console.log(list);
