import 'jasmine';
import { Node, LinkedList } from '../../data-structures/linked-list';

describe('Node', () => {
  it('should create a new Node with provided value and next === null', () => {
    const value = 'value';
    const node = new Node(value);

    expect(node).toBeTruthy();
    expect(node.value).toBe(value);
    expect(node.next).toBeNull();
  });
});

describe('LinkedList', () => {
  let list: LinkedList<any>;

  const firstValue = '123';
  const secondValue = ['big', 'array'];
  const thirdValue = { firstValue, secondValue };
  const addAllValuesToList = () => list.addAll([firstValue, secondValue, thirdValue]);

  beforeEach(() => {
    list = new LinkedList<any>();
  });

  it('should create', () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  describe('push()', () => {
    it('should add new Nodes to the end of the list', () => {
      expect(list.length).toBe(0);
      list.push(firstValue);

      expect(list.head).toBe(list.tail);
      expect(list.tail.next).toBeNull();
      expect(list.tail.value).toBe(firstValue);

      expect(list.length).toBe(1);

      list.push(secondValue);

      expect(list.head.value).toBe(firstValue);
      expect(list.head.next).toBe(list.tail);
      expect(list.tail.value).toBe(secondValue);
      expect(list.length).toBe(2);

      list.push(thirdValue);

      expect(list.head.value).toBe(firstValue);
      expect(list.head.next.value).toBe(secondValue);
      expect(list.head.next.next).toBe(list.tail);
      expect(list.tail.value).toBe(thirdValue);
      expect(list.length).toBe(3);
    });

    it('should return this list', () => {
      expect(list.push(123)).toBe(list);
    });
  });

  describe('addAll()', () => {
    it('should add all values from iterable to the end of the list', () => {
      expect(list.length).toBe(0);

      list.addAll([firstValue, secondValue, thirdValue]);

      expect(list.length).toBe(3);
      expect(list.head.value).toBe(firstValue);
      expect(list.tail.value).toBe(thirdValue);
      expect(list.get(1).value).toBe(secondValue);
    });
  });

  describe('pop()', () => {
    it('should remove last element from the list and return it', () => {
      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);

      const node = list.pop();

      expect(node.value).toBe(thirdValue);
      expect(list.tail.value).toBe(secondValue);
      expect(list.length).toBe(2);
    });

    it('should return undefined if list is empty', () => {
      expect(list.length).toBe(0);
      expect(list.pop()).toBeUndefined();
      expect(list.length).toBe(0);
    });
  });

  describe('unshift()', () => {
    it('should add new value to the start of the list and make it the new head', () => {
      expect(list.length).toBe(0);
      expect(list.unshift(firstValue)).toBe(list);
      expect(list.head.value).toBe(firstValue);
      expect(list.head).toBe(list.tail);
      expect(list.length).toBe(1);

      list.unshift(secondValue);

      expect(list.head.value).toBe(secondValue);
      expect(list.head.next.value).toBe(firstValue);
      expect(list.tail.value).toBe(firstValue);
      expect(list.length).toBe(2);
    });
  });

  describe('shift()', () => {
    it('should remove first node from the list and return it', () => {
      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);

      expect(list.head.value).toBe(firstValue);
      expect(list.length).toBe(3);

      expect(list.shift().value).toBe(firstValue);
      expect(list.head.value).toBe(secondValue);
      expect(list.length).toBe(2);
    });

    it('should return undefind if the list is empty', () => {
      expect(list.length).toBe(0);
      expect(list.shift()).toBeUndefined();
    });

    it('should make list empty if list has only 1 item', () => {
      expect(list.length).toBe(0);

      list.unshift(firstValue);

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(firstValue);
      expect(list.head).toBe(list.tail);
      expect(list.head.next).toBeNull();

      list.shift();

      expect(list.length).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });

  describe('get()', () => {
    it('should return item at provided index', () => {
      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);

      expect(list.get(0)).toBe(list.head);
      expect(list.get(2)).toBe(list.tail);
      expect(list.get(1).value).toBe(secondValue);
    });

    it('should return undefined if provided index does`nt exist', () => {
      expect(list.length).toBe(0);
      expect(list.get(2)).toBeUndefined();
      addAllValuesToList();
      expect(list.get(12344123)).toBeUndefined();
      expect(list.get(-5)).toBeUndefined();
    });
  });

  describe('set()', () => {
    it('should change value of the node at the provided index and return boolean to indicate whether operation was successful', () => {
      const newValue = 'New val';
      expect(list.length).toBe(0);

      addAllValuesToList();

      expect(list.length).toBe(3);
      expect(list.set(1, newValue)).toBeTrue();
      expect(list.get(1).value).toBe(newValue);

      expect(list.set(12312, newValue)).toBeFalse();
    });
  });

  describe('insert()', () => {
    it('should insert new Node at provided index with provided value and return boolean to indicate if operation was successful', () => {
      const insertOne = 1;
      const insertTwo = '345534';
      const insertThree = [null, undefined];

      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);

      expect(list.insert(0, insertOne)).toBeTrue();
      expect(list.head.value).toBe(insertOne);
      expect(list.head.next).toBe(list.get(1));
      expect(list.length).toBe(4);

      expect(list.insert(2, insertTwo)).toBeTrue();
      expect(list.get(2).value).toBe(insertTwo);
      expect(list.get(2).next.value).toBe(secondValue);
      expect(list.length).toBe(5);

      expect(list.insert(5, insertThree)).toBeTrue();
      expect(list.tail.value).toBe(insertThree);
      expect(list.get(4).next).toBe(list.tail);

      expect(list.insert(10, 'random')).toBeFalse();
      expect(list.insert(10, 'random')).toBeFalse();
    });
  });

  describe('remove()', () => {
    beforeEach(() => {
      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);
    });

    it('should remove the node at the provided index and return it', () => {
      expect(list.remove(1).value).toBe(secondValue);
      expect(list.length).toBe(2);
    });

    it('should set new head if removing from 0 index', () => {
      expect(list.remove(0).value).toBe(firstValue);
      expect(list.length).toBe(2);
      expect(list.head.value).toBe(secondValue);
    });
    it('should set new tail if removing from last index', () => {
      expect(list.remove(2).value).toBe(thirdValue);
      expect(list.length).toBe(2);
      expect(list.tail.value).toBe(secondValue);
    });
    it('should return undefined if provided index doesn`t exist', () => {
      expect(list.remove(234823904)).toBeUndefined();
    });
  });

  describe('reverse()', () => {
    it('should reverse the list in place', () => {
      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);

      const oldHead = list.head;
      const oldTail = list.tail;

      list.reverse();

      expect(list.head).toBe(oldTail);
      expect(list.tail).toBe(oldHead);
    });
  });

  describe('forEach()', () => {
    it('should call provided callback on every node with node being argument', () => {
      const spy = jasmine.createSpy('forEach callback spy');
      expect(list.length).toBe(0);
      list.push(firstValue);
      expect(list.length).toBe(1);
      list.forEach(spy);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(list.get(0));
    });
  });
});
