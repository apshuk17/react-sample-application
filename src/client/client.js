import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes/routes";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector("#root"));
