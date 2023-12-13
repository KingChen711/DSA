const weightedGraph = [
  [0, 2, 4, 0, 0],
  [2, 0, 1, 7, 0],
  [4, 1, 0, 0, 3],
  [0, 7, 0, 0, 5],
  [0, 0, 3, 5, 0],
];

const dijkstras = (weightedGraph, source) => {
  const priorityQueue = [];
  const visited = new Set();
  const n = weightedGraph.length;
  const result = [];

  priorityQueue.push({index: source, distance: 0});

  while (priorityQueue.length > 0) {
    const vertex = priorityQueue.shift();

    if (visited.has(vertex.index)) {
      continue;
    }

    visited.add(vertex.index);
    result.push(vertex);

    const neighbors = weightedGraph[vertex.index];

    for (let i = 0; i < n; ++i) {
      if (i !== vertex.index && neighbors[i] > 0) {
        const existIndex = priorityQueue.find((x) => x.index === i);

        if (!existIndex) {
          priorityQueue.push({
            index: i,
            distance: vertex.distance + neighbors[i],
          });
        } else {
          existIndex.distance = Math.min(
            vertex.distance + neighbors[i],
            existIndex.distance
          );
        }

        priorityQueue.sort((a, b) => a.distance - b.distance);
      }
    }
  }

  return result;
};

console.log(dijkstras(weightedGraph, 0));

//dijkstras may wrong if exist negative distance
