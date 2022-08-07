const initialState = {};

export function init(dependencies) {
  return () => Object.assign({}, initialState);
}
