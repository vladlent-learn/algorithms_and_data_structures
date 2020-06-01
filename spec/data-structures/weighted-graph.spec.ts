import { WeightedGraph } from '../../data-structures/weighted-graph';

describe('WeightedGraph', () => {
  let graph: WeightedGraph;

  beforeEach(() => {
    graph = new WeightedGraph();
  });

  function addCities(g: WeightedGraph) {
    g.adjacencyList = {
      Tokyo: [
        { node: 'Kyoto', weight: 10 },
        { node: 'Dallas', weight: 50 },
      ],
      Kyoto: [{ node: 'Tokyo', weight: 10 }],
      Dallas: [{ node: 'Tokyo', weight: 50 }],
      'New York': [],
    };
    return g;
  }

  describe('addVertex()', () => {
    it('should take a key for a new vertex and create an entry for it in adjacencyList', () => {
      graph.addVertex('Nirvana');
      expect(graph.adjacencyList).toEqual({ Nirvana: [] });
      graph.addVertex('10');
      expect(graph.adjacencyList).toEqual({ Nirvana: [], '10': [] });
    });
  });

  describe('addEdge()', () => {
    it('should create and edge between two provided vertices', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Kyoto');
      graph.addVertex('Dallas');
      graph.addVertex('New York');

      graph.addEdge('Tokyo', 'Kyoto', 10);
      expect(graph.adjacencyList).toEqual({
        Tokyo: [{ node: 'Kyoto', weight: 10 }],
        Kyoto: [{ node: 'Tokyo', weight: 10 }],
        Dallas: [],
        'New York': [],
      });

      graph.addEdge('Tokyo', 'Dallas', 50);
      expect(graph.adjacencyList).toEqual({
        Tokyo: [
          { node: 'Kyoto', weight: 10 },
          { node: 'Dallas', weight: 50 },
        ],
        Kyoto: [{ node: 'Tokyo', weight: 10 }],
        Dallas: [{ node: 'Tokyo', weight: 50 }],
        'New York': [],
      });
    });
  });

  describe('removeEdge()', () => {
    it('should remove an edge between two provided vertices', () => {
      addCities(graph);

      graph.removeEdge('Kyoto', 'Tokyo');

      expect(graph.adjacencyList).toEqual({
        Tokyo: [{ node: 'Dallas', weight: 50 }],
        Kyoto: [],
        Dallas: [{ node: 'Tokyo', weight: 50 }],
        'New York': [],
      });
    });
  });
});
