import 'jasmine';
import { Node, SinglyLinkedList } from '../../data-structures/singly-linked-list';

describe('SinglyLinkedList', () => {
  let list: SinglyLinkedList<any>;

  const firstValue = '123';
  const secondValue = ['big', 'array'];
  const thirdValue = { firstValue, secondValue };

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  describe('Node', () => {
    it('should create a new Node with provided value and next === null', () => {
      const value = 'value';
      const node = new Node(value);

      expect(node).toBeTruthy();
      expect(node.value).toEqual(value);
      expect(node.next).toEqual(null);
    });
  });

  it('should create', () => {
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });

  describe('push()', () => {
    it('should add new Nodes to the end of the list', () => {
      expect(list.length).toEqual(0);
      list.push(firstValue);

      expect(list.head).toEqual(list.tail);
      expect(list.tail.next).toEqual(null);
      expect(list.tail.value).toEqual(firstValue);

      expect(list.length).toEqual(1);

      list.push(secondValue);

      expect(list.head.value).toEqual(firstValue);
      expect(list.head.next).toEqual(list.tail);
      expect(list.tail.value).toEqual(secondValue);
      expect(list.length).toEqual(2);

      list.push(thirdValue);

      expect(list.head.value).toEqual(firstValue);
      expect(list.head.next.value).toEqual(secondValue);
      expect(list.head.next.next).toEqual(list.tail);
      expect(list.tail.value).toEqual(thirdValue);
      expect(list.length).toEqual(3);
    });
  });
});
