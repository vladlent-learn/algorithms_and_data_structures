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

  contains(value: number): boolean {
    if (!this.root) return false;

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return true;

      if (currentNode.value > value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      }

      if (currentNode.value < value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
  }

  /** Breadth First Search */
  bfs(): number[] {
    if (!this.root) return [];

    const data = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  /** Depth First Search Pre Order */
  dfsPreOrder(): number[] {
    if (!this.root) return [];

    const data = [];

    const traverseNodes = (node: Node) => {
      data.push(node.value);
      if (node.left) traverseNodes(node.left);
      if (node.right) traverseNodes(node.right);
    };

    traverseNodes(this.root);
    return data;
  }

  /** Depth First Search Post Order */
  dfsPostOrder(): number[] {
    if (!this.root) return [];

    const data = [];

    const traverseNodes = (node: Node) => {
      if (node.left) traverseNodes(node.left);
      if (node.right) traverseNodes(node.right);
      data.push(node.value);
    };

    traverseNodes(this.root);
    return data;
  }

  /** Depth First Search In Order */
  dfsInOrder(): number[] {
    if (!this.root) return [];

    const data = [];

    const traverseNodes = (node: Node) => {
      if (node.left) traverseNodes(node.left);
      data.push(node.value);
      if (node.right) traverseNodes(node.right);
    };

    traverseNodes(this.root);
    return data;
  }
}
