import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./AuthContext/AuthContext";
import {Provider} from "react-redux"
import { store } from './Components/Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
