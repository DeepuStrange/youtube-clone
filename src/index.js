import ReactDom from "react-dom/client";
import App from "./App";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./youTubeSlice/Slice";
import { createContext } from "react";
const Root = ReactDom.createRoot(document.getElementById("root"));
const Store = configureStore({
  reducer :rootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  }),
})
const context = createContext();
Root.render(
  <Provider store={Store}>
    <App></App>
  </Provider>
)