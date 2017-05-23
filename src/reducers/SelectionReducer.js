export default (state = "001", { type, payload }) => {
  const actions = {
    'SELECT_POKEMON': payload
  };

  return actions[type] || state;
};
