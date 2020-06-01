export class Node {
  constructor(public node: string, public weight: number) {}
}

export class WeightedGraph {
  adjacencyList: { [node: string]: Node[] } = {};
  constructor() {}

  addVertex(vertex: string): this {
    this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push(new Node(vertex2, weight));
    this.adjacencyList[vertex2].push(new Node(vertex1, weight));
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v.node !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v.node !== vertex1);
  }
}
