import { BinarySearchTree } from '../../data-structures/binary-search-tree';

describe('BinarySearchTree', () => {
  const values = [10, 13, 5, 2, 7, 11, 16];

  let tree: BinarySearchTree;

  const fillTree = () => {
    values.forEach(v => tree.insert(v));
  };

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

  describe('contains()', () => {
    it('should return false if tree is empty', () => {
      expect(tree.contains(5)).toBe(false);
    });

    it('should return true if value is in the tree', () => {
      tree.insert(10);
      expect(tree.contains(10)).toBe(true);
    });

    it('should return false if provided value is not in the tree', () => {
      fillTree();

      expect(tree.contains(6)).toBe(false);
      expect(tree.contains(14)).toBe(false);
      expect(tree.contains(22)).toBe(false);
      expect(tree.contains(-3)).toBe(false);
      expect(tree.contains(9)).toBe(false);
    });
  });

  describe('bfs()', () => {
    it('should return an array of all values in a tree', () => {
      fillTree();
      expect(tree.bfs()).toIncludeAllMembers(values);
    });
    it('should return an empty array if tree is empty', () => {
      expect(tree.bfs()).toBeArrayOfSize(0);
    });
  });

  describe('dfsPreOrder()', () => {
    it('should return an array of all values in a tree', () => {
      fillTree();
      expect(tree.dfsPreOrder()).toIncludeAllMembers(values);
    });
    it('should return an empty array if tree is empty', () => {
      expect(tree.dfsPreOrder()).toBeArrayOfSize(0);
    });
  });

  describe('dfsPostOrder()', () => {
    it('should return an array of all values in a tree', () => {
      fillTree();
      expect(tree.dfsPostOrder()).toIncludeAllMembers(values);
    });
    it('should return an empty array if tree is empty', () => {
      expect(tree.dfsPostOrder()).toBeArrayOfSize(0);
    });
  });
  describe('dfsInOrder()', () => {
    it('should return an array of all values in a tree', () => {
      fillTree();
      expect(tree.dfsInOrder()).toIncludeAllMembers(values);
    });
    it('should return an empty array if tree is empty', () => {
      expect(tree.dfsInOrder()).toBeArrayOfSize(0);
    });
  });
});
