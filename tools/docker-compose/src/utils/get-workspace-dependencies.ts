import { ProjectGraph } from '@nx/devkit';

export function getWorkspaceDependencies(
  projectName: string,
  graph: ProjectGraph,
  collected = new Set<string>()
): Set<string> {
  const projectDependencies = graph.dependencies[projectName];

  if (!projectDependencies) {
    return collected;
  }

  for (const dependency of projectDependencies) {
    if (graph.nodes[dependency.target] && !collected.has(dependency.target)) {
      collected.add(dependency.target);
      getWorkspaceDependencies(dependency.target, graph, collected);
    }
  }

  return collected;
}
