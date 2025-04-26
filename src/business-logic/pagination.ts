import {
  Connection,
  ConnectionCursorScalarConfig,
  Edge,
  Node,
  PageInfo,
} from "../graphql/types";

function defaultGetCursor<T extends Node>(node: T): string {
  return node.id;
}

export function createEdges<T extends Node>(
  nodes: T[],
  getCursor?: (node: T) => string
) {
  const getCursorFn = getCursor || defaultGetCursor;

  return nodes.map((node) => ({
    node,
    cursor: getCursorFn(node),
  }));
}

export function createPageInfo<T extends Edge>(
  edges: T[],
  hasNextPage: boolean,
  hasPreviousPage: boolean
): PageInfo {
  return {
    hasNextPage,
    hasPreviousPage,
    startCursor: edges.length > 0 ? edges[0].cursor : null,
    endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
  };
}

export function createConnection<T extends Node>(
  nodes: T[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  getCursor?: (node: T) => string
): Connection {
  const edges = createEdges<T>(nodes, getCursor);
  const pageInfo = createPageInfo(edges, hasNextPage, hasPreviousPage);
  return {
    edges,
    pageInfo,
  };
}
