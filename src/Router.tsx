import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin></Coin>
        </Route>
        <Route>
          <Coins></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
