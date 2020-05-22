export class Node {
  left: Node = null;
  right: Node = null;
  constructor(public value: number) {}
}
export class BinarySearchTree {
  root: Node = null;

  constructor(value?: number) {
    if (value) this.root = new Node(value);
  }

  insert(value: number): this {
    if (!this.root) {
      this.root = new Node(value);
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.value === value) return this;

      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
      if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}
