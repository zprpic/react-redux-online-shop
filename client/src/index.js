import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";
import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsAPI } from "./features/productsAPI";

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(productsAPI.middleware);
  },
});

store.dispatch(productsFetch());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
