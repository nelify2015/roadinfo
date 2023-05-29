import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppState from "./contexts/AppContext"
import { BrowserRouter } from "react-router-dom";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState>
  </React.StrictMode>
);
