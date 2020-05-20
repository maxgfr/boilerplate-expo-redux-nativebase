const done = (type, payload) => (
  {
    type: type,
    payload: payload
  }
);

export const initSearch = () => {
  return (dispatch, getState) => {
    dispatch(done('ACTION', {}));
  }
}
