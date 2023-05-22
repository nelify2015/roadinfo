const infoReducer = (state, action) => {
  console.log('infoReducer')
  const { type, payload } = action;
  // switch (type) {
  //   case "LOGIN":
      return { ...state, ...payload };
    // case "LOGOUT":
    //   return {};
    // default:
    //   return state;
  // }
};

export default infoReducer;