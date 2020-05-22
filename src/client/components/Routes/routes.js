import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/home";
import UsersListComponent from '../UsersList/usersList';

export default () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UsersListComponent} />
    </>
  );
};
