export class HashTable {
  keyMap: [string, any][][];

  static hash(key: string, length: number) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % length;
    }

    return total;
  }

  constructor(public readonly size: number) {
    this.keyMap = new Array(size);
  }

  private _hash(key: string) {
    return HashTable.hash(key, this.size);
  }

  set(key: string, value: any) {
    const hash = this._hash(key);

    if (Array.isArray(this.keyMap[hash])) {
      const duplicateKeyIndex = this.keyMap[hash].findIndex(i => i[0] === key);

      if (duplicateKeyIndex !== -1) {
        this.keyMap[hash][duplicateKeyIndex] = [key, value];
      } else {
        this.keyMap[hash].push([key, value]);
      }
    } else {
      this.keyMap[hash] = [[key, value]];
    }
  }

  get(key: string): any {
    const hash = this._hash(key);

    if (Array.isArray(this.keyMap[hash])) {
      const item = this.keyMap[hash].find(i => i[0] === key);
      if (item) return item[1];
    }
  }

  keys(): string[] {
    return this.keyMap.map(i => i.map(e => e[0])).flat();
  }

  values(): any[] {
    return this.keyMap.map(i => i.map(e => e[1])).flat();
  }
}
