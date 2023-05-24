const infoReducer = (state, action) => {  
  const { type, payload } = action;
  // console.log('infoReducer', {state}, {payload})
  switch (type) {
    case "INFO_SET_ALL":
      return {...state, ...payload};
    default:
      return state;
  }
};

export default infoReducer;