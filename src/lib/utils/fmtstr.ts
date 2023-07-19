export const stripEdgeSlashes = (str: string): string => {
  return str.replace(/^\/+|\/+$/g, '');
}