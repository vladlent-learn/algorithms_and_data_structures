import { HashTable } from '../../data-structures/hash-table';

describe('HashTable', () => {
  let hashTable: HashTable;

  beforeEach(() => {
    hashTable = new HashTable(12);
  });

  describe('hash()', () => {
    it('should hash provided value depending on size of the array', () => {
      expect(HashTable.hash('blue', 10)).toBe(0);
      expect(HashTable.hash('red', 12)).toBe(9);
      expect(HashTable.hash('salmon', 6)).toBe(2);
    });

    it('should always return same hash for same value and length', () => {
      expect(HashTable.hash('blue', 10)).toEqual(HashTable.hash('blue', 10));
      expect(HashTable.hash('red', 12)).toEqual(HashTable.hash('red', 12));
      expect(HashTable.hash('salmon', 6)).toEqual(HashTable.hash('salmon', 6));
    });
  });

  describe('set()', () => {
    it('should hash the key and put it in the hash table', () => {
      hashTable.set('black', 'dog');
      expect(hashTable.keyMap[11]).toEqual([['black', 'dog']]);
      hashTable.set('maroon', 5);
      hashTable.set('purple', 'deep');
      expect(hashTable.keyMap[4]).toEqual([
        ['maroon', 5],
        ['purple', 'deep'],
      ]);
    });

    it('should overwrite properties with same keys', () => {
      hashTable.set('black', 'dog');
      expect(hashTable.keyMap[11]).toEqual([['black', 'dog']]);
      hashTable.set('black', 'widow');
      expect(hashTable.keyMap[11]).toEqual([['black', 'widow']]);
    });
  });

  describe('get()', () => {
    it('should return the value that corresponds to the provided key', () => {
      hashTable.set('maroon', 5);
      expect(hashTable.get('maroon')).toBe(5);
      hashTable.set('black', 'dog');
      expect(hashTable.get('black')).toBe('dog');
    });

    it('should return undefined if there is no such key', () => {
      hashTable.set('maroon', 5);
      expect(hashTable.get('moron')).toBeUndefined();
    });
  });

  describe('keys()', () => {
    it('should return an array of keys', () => {
      hashTable.set('black', 'dog');
      hashTable.set('maroon', 5);
      hashTable.set('purple', 'deep');
      expect(hashTable.keys()).toIncludeAllMembers(['black', 'maroon', 'purple']);
    });
  });

  describe('values()', () => {
    it('should return an array of valus', () => {
      hashTable.set('black', 'dog');
      hashTable.set('maroon', 5);
      hashTable.set('purple', 'deep');
      expect(hashTable.values()).toIncludeAllMembers(['dog', 5, 'deep']);
    });
  });
});
