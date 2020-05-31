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

  describe('depthFirstRecursive()', () => {
    it('should return list of all connected vertices starting from provided vertex', () => {
      graph.adjacencyList = {
        Tokyo: ['Kyoto', 'Dallas'],
        Kyoto: ['Tokyo'],
        Dallas: ['Tokyo'],
        'New York': [],
      };

      expect(graph.depthFirstRecursive('Tokyo')).toIncludeAllMembers(['Tokyo', 'Kyoto', 'Dallas']);
      expect(graph.depthFirstRecursive('New York')).toEqual(['New York']);
    });
    it('should return list of all connected vertices starting from provided vertex in correct order', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addVertex('E');
      graph.addVertex('F');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      graph.addEdge('C', 'E');
      graph.addEdge('D', 'E');
      graph.addEdge('D', 'F');
      graph.addEdge('E', 'F');

      expect(graph.depthFirstRecursive('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    });
  });

  describe('depthFirstIterative()', () => {
    it('should return list of all connected vertices starting from provided vertex', () => {
      graph.adjacencyList = {
        Tokyo: ['Kyoto', 'Dallas'],
        Kyoto: ['Tokyo'],
        Dallas: ['Tokyo'],
        'New York': [],
      };

      expect(graph.depthFirstIterative('Tokyo')).toIncludeAllMembers(['Tokyo', 'Kyoto', 'Dallas']);
      expect(graph.depthFirstIterative('New York')).toIncludeAllMembers(['New York']);
    });
    it('should return list of all connected vertices starting from provided vertex in correct order', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addVertex('E');
      graph.addVertex('F');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      graph.addEdge('C', 'E');
      graph.addEdge('D', 'E');
      graph.addEdge('D', 'F');
      graph.addEdge('E', 'F');

      expect(graph.depthFirstIterative('A')).toIncludeAllMembers(['A', 'C', 'E', 'F', 'D', 'B']);
    });
  });
});
