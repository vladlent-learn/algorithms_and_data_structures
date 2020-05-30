export type Vertex = string | number;

export class Graph {
  adjacencyList: { [V in Vertex]: any[] } = {};

  constructor() {}

  addVertex(key: Vertex): this {
    this.adjacencyList[key] = [];
    return this;
  }

  addEdge(vertex1: Vertex, vertex2: Vertex) {
    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1: Vertex, vertex2: Vertex) {}
}
