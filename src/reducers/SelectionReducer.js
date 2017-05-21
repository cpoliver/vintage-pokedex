export default (state = null, { type, payload }) => {
  const actions = {
    'SELECT_POKEMON': payload
  };

  return actions[type] || state;
};
