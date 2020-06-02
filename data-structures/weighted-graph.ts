import { PriorityQueue } from './priority-queue';

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

  getShortestPath(v1: string, v2: string): { distance: number; path: string[] } {
    const distances = { [v1]: 0 };
    const queue = new PriorityQueue();
    const previous = {};

    Object.keys(this.adjacencyList).forEach(vertex => {
      previous[vertex] = null;

      if (vertex === v1) {
        queue.enqueue(v1, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
    });

    while (queue.values.length) {
      const vertex = queue.dequeue().value;
      if (vertex === v2) break;
      this.adjacencyList[vertex].forEach(v => {
        const distance = distances[vertex] + v.weight;

        if (distances[v.node] > distance) {
          distances[v.node] = distance;
          previous[v.node] = vertex;
          queue.enqueue(v.node, distance);
        }
      });
    }

    const path = [v2];
    let smallest = v2;

    while (smallest !== v1) {
      smallest = previous[smallest];
      path.push(smallest);
    }
    return { path: path.reverse(), distance: distances[v2] };
  }
}
