import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
