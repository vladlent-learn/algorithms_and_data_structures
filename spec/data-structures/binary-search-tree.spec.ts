import { BinarySearchTree } from '../../data-structures/binary-search-tree';

describe('BinarySearchTree', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  describe('insert()', () => {
    it('should insert first value at the root', () => {
      tree.insert(5);
      expect(tree.root.value).toBe(5);
    });

    it('should insert smaller values to the left of the root', () => {
      tree.insert(10);
      tree.insert(5);
      expect(tree.root.left.value).toBe(5);
    });

    it('should insert bigger values to the right of the root', () => {
      tree.insert(10);
      tree.insert(12);
      expect(tree.root.right.value).toBe(12);
    });

    it('should correctly insert values deeper intro the tree', () => {
      tree.insert(20);
      tree.insert(14);
      tree.insert(33);

      expect(tree.root.value).toBe(20);
      expect(tree.root.left.value).toBe(14);
      expect(tree.root.right.value).toBe(33);

      tree.insert(10);
      tree.insert(16);

      expect(tree.root.left.left.value).toBe(10);
      expect(tree.root.left.right.value).toBe(16);

      tree.insert(45);
      tree.insert(26);

      expect(tree.root.right.left.value).toBe(26);
      expect(tree.root.right.right.value).toBe(45);
    });

    it('should return this', () => {
      expect(tree.insert(-5)).toBe(tree);
    });
  });
});
