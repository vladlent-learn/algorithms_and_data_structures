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
}

const tree = new BinarySearchTree(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log('tree >>>>', tree);
