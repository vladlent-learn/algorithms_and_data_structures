import { Graph } from '../../data-structures/graph';

describe('Graph', () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('addVertex()', () => {
    it('should take a key for a new vertex and create an entry for it in adjacencyList', () => {
      graph.addVertex('Nirvana');
      expect(graph.adjacencyList).toEqual({ Nirvana: [] });
      graph.addVertex(10);
      expect(graph.adjacencyList).toEqual({ Nirvana: [], 10: [] });
    });
  });

  describe('addEdge()', () => {
    it('should create and edge between two provided vertices', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Kyoto');
      graph.addVertex('Dallas');
      graph.addVertex('New York');

      graph.addEdge('Tokyo', 'Kyoto');
      expect(graph.adjacencyList).toEqual({
        Tokyo: ['Kyoto'],
        Kyoto: ['Tokyo'],
        Dallas: [],
        'New York': [],
      });

      graph.addEdge('Tokyo', 'Dallas');
      expect(graph.adjacencyList).toEqual({
        Tokyo: ['Kyoto', 'Dallas'],
        Kyoto: ['Tokyo'],
        Dallas: ['Tokyo'],
        'New York': [],
      });

      graph.addEdge('Tokyo', 'Kyoto');
      expect(graph.adjacencyList).toEqual({
        Tokyo: ['Kyoto', 'Dallas'],
        Kyoto: ['Tokyo'],
        Dallas: ['Tokyo'],
        'New York': [],
      });
    });
  });

  describe('removeEdge()', () => {
    it('should remove an edge between two provided vertices', () => {
      graph.adjacencyList = {
        Tokyo: ['Kyoto', 'Dallas'],
        Kyoto: ['Tokyo'],
        Dallas: ['Tokyo'],
        'New York': [],
      };

      graph.removeEdge('Kyoto', 'Tokyo');

      expect(graph.adjacencyList).toEqual({
        Tokyo: ['Dallas'],
        Kyoto: [],
        Dallas: ['Tokyo'],
        'New York': [],
      });
    });
  });

  describe('removeVertex()', () => {
    it('should remove vertex and all its edges from adjacency list', () => {
      graph.adjacencyList = {
        Tokyo: ['Kyoto', 'Dallas'],
        Kyoto: ['Tokyo'],
        Dallas: ['Tokyo'],
        'New York': [],
      };

      graph.removeVertex('Dallas');
      expect(graph.adjacencyList).toEqual({
        Tokyo: ['Kyoto'],
        Kyoto: ['Tokyo'],
        'New York': [],
      });

      graph.removeVertex('Tokyo');
      expect(graph.adjacencyList).toEqual({
        Kyoto: [],
        'New York': [],
      });
    });
  });
});
