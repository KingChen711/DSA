class Edge {
  constructor(
    public start: number,
    public end: number,
    public weight: number
  ) {}
}

const bellmanFord = (
  edges: Edge[],
  numVertices: number,
  source: number
): number[] => {
  const distance: number[] = new Array(numVertices).fill(
    Number.POSITIVE_INFINITY
  );
  distance[source] = 0;

  // Relax edges repeatedly
  for (let i = 0; i < numVertices - 1; ++i) {
    for (const edge of edges) {
      if (distance[edge.start] + edge.weight < distance[edge.end]) {
        distance[edge.end] = distance[edge.start] + edge.weight;
      }
    }
  }

  // Check for negative cycles
  for (const edge of edges) {
    if (distance[edge.start] + edge.weight < distance[edge.end]) {
      // Negative cycle detected
      throw new Error("Graph contains a negative cycle");
    }
  }

  return distance;
};

// Example usage
const edges: Edge[] = [
  new Edge(0, 1, 2),
  new Edge(1, 2, 1),
  new Edge(2, 3, -2),
  new Edge(3, 1, 7),
  new Edge(4, 2, 3),
];

const numVertices = 5;
const sourceVertex = 0;

const result = bellmanFord(edges, numVertices, sourceVertex);
console.log(result);
