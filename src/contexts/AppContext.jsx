import { useReducer, createContext, useEffect, useState } from "react";
import userReducer from "../reducers/userReducer";
import infoReducer from "../reducers/infoReducer";
import pageReducer from "../reducers/PageReducer.jsx";
import themeReducer from "../reducers/themeReducer";
export const APP_NAME = "ROADINFO";

// Need to convert the HK1980 to WGS84 
// Fr: HK1980 Grid
// To: WGS84 (ITRF96) Geographic | Decimal Degree
// Datum (Vertical): No
import roadData from '../assets/data.json'

//Check the localstorage or set a default state
const initialState = JSON.parse(localStorage.getItem(APP_NAME))
  ? JSON.parse(localStorage.getItem(APP_NAME))
  : {
      user: {
        username: "",
        email: "",
        isAdmin: false,
      },
      info: { all: [], pinned: [], data: roadData },
      theme: { dark: false },
      page: {}     
    };
//Create your global context
const AppContext = createContext(initialState);
// const MyContext = createContext(0);

// //Create combined reducers
const combinedReducers = ({ user, info, theme, page }, action) => ({
  user: userReducer(user, action),
  info: infoReducer(info, action),  
  theme: themeReducer(theme, action),
  page: pageReducer(page, action),
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