// import React from "react";
// import ReactDOM from "react-dom/client";
//
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render();
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer from "./Reducers/ProductSlice";
import BlogReducer from "./Reducers/BlogReducer";

import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

const persistConfig = {
  key: "addProducts",
  storage,
  whitelist: ["addBlogs"],
};
const rootReducer = combineReducers({
  product: productReducer,
  blog: BlogReducer,
});

const textPersistReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    products: textPersistReducer,
  },
  middleware: [thunk],
});
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>{" "}
    kljhlulghjnm
  </Provider>
);
