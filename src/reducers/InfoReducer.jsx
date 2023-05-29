const infoReducer = (state, action) => {  
  const { type, payload } = action;
  let index = -1

  switch (type) {
    case "INFO_SET_ALL":
      return {...state, ...payload};
    case "PIN_ROAD_INFO":
      console.log('PIN_ROAD_INFO', payload, state)
      // state.all[payload.infoIndex] = {...state.all[payload.infoIndex], pinned: payload.pinned}
      if (payload.pinned) {
        if (!state.pinned.includes(payload.infoId))
          state.pinned.push(payload.infoId)
      } else {
        index = state.pinned.indexOf(payload.infoId)
        if (index > -1)
          state.pinned.splice(index, 1)
      }
      return state
    default:
      return state;
  }
};

export default infoReducer;