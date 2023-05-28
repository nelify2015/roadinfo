const pageReducer = (state, action) => {  
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_SHOWN_PIN_INDEX":
      // console.log('CHANGE_SHOWN_PIN_INDEX', state)
      state = {...state, showPinIndex: state.showPinIndex === payload ? -1 : payload }
      return state
    default:
      return state;
  }
};

export default pageReducer;