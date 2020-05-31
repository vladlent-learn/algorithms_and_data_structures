export type Vertex = string | number;

export class Graph {
  adjacencyList: { [V in Vertex]: Vertex[] } = {};

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

  removeEdge(vertex1: Vertex, vertex2: Vertex) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(v: Vertex) {
    Object.keys(this.adjacencyList).forEach(vertex => {
      if (vertex === v) return;
      this.removeEdge(v, vertex);
    });
    delete this.adjacencyList[v];
  }

  depthFirstRecursive(vertex: Vertex) {
    const result = [];
    const visited = {};

    const traverse = (vertex: Vertex) => {
      result.push(vertex);
      visited[vertex] = true;

      const vertices = this.adjacencyList[vertex];
      if (!vertices.length) return;
      vertices.forEach(vertex => {
        if (!visited[vertex]) traverse(vertex);
      });
    };

    traverse(vertex);
    return result;
  }

  depthFirstIterative(vertex: Vertex) {
    const stack = [vertex];
    const result = [];
    const visited = { [vertex]: true };

    while (stack.length > 0) {
      const currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  bfs(vertex: Vertex) {
    const result = [];
    const queue = [vertex];
    const visited = { [vertex]: true };

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
