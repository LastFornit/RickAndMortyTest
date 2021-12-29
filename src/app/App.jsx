import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import Characters from "./components/characters";

function App() {
  return (
    <>
      <Switch>
        <Route path="/:characterId?" component={Characters} />

        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
