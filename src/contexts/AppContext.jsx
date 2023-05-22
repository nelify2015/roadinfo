import { useReducer, createContext, useEffect, useState } from "react";
import userReducer from "../reducers/userReducer";
import infoReducer from "../reducers/infoReducer";
import themeReducer from "../reducers/themeReducer";
export const APP_NAME = "ROADINFO";

//Check the localstorage or set a default state
const initialState = JSON.parse(localStorage.getItem(APP_NAME))
  ? JSON.parse(localStorage.getItem(APP_NAME))
  : {
      user: {
        username: "",
        email: "",
        isAdmin: false,
      },
      info: { all: [], pinned: [] },
      theme: { dark: false },
    };
//Create your global context
const AppContext = createContext(initialState);
// const MyContext = createContext(0);

// //Create combined reducers
const combinedReducers = ({ user, info, theme }, action) => ({
  user: userReducer(user, action),
  info: infoReducer(info, action),
  theme: themeReducer(theme, action),
});

const AppState = ({ children }) => {
  //Making it to provider state
  const [state, dispatch] = useReducer(combinedReducers, initialState)
  // const [cnt, setCnt] = useState(0)
  useEffect(() => {
    localStorage.setItem(APP_NAME, JSON.stringify(state));
  }, [state]);
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        {/* <MyContext.Provider value={{ cnt, setCnt }}> */}
          {children}
        {/* </MyContext.Provider> */}
      </AppContext.Provider>
    </>
  );
};

export default AppState;

export { AppContext, AppState };