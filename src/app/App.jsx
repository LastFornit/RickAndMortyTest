import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import Characters from "./components/characters";

function App() {
  // роутинг добавлен на будущее, если будет необходимость вывобить карточку персонажа, локации, эпизода
  // ToastContainer для отображения ошибок
  return (
    <>
      <Switch>
        <Route path="/" component={Characters} />

        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
