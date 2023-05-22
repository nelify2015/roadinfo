const themeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DARK":
      return { ...payload };
    default:
      return state;
  }
};

export default themeReducer;