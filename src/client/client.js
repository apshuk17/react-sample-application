import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./components/Routes/routes";
import reducers from "./reducers";
import Header from "./components/presentational/Header/header";

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector("#root"));
