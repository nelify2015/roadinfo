const infoReducer = (state, action) => {
  const { type, payload } = action;
  // console.log('infoReducer', {state}, {payload})
  // switch (type) {
  //   case "LOGIN":
      // return { ...payload };
    // case "LOGOUT":
    //   return {};
    // default:
    //   return state;
  // }

  return payload
};

export default infoReducer;