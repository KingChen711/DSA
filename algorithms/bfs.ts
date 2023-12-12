type Graph = {
  [key: string]: string[];
};

const graph: Graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

type Vertex = {
  name: string;
  deg: number;
};

const bfs = (graph: Graph, from: string): Vertex[] => {
  const result: Vertex[] = [];
  const queue: string[] = [];
  const visited: Set<string> = new Set();

  queue.push(from);
  visited.add(from);
  result.push({name: from, deg: 0});

  while (queue.length > 0) {
    const person = queue.shift()!;
    const deg = result.find((x) => x.name === person)!.deg + 1;

    for (const neighbor of graph[person]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        result.push({name: neighbor, deg});
      }
    }
  }

  return result;
};

console.log(bfs(graph, "you"));
