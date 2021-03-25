import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "src/pages/Counter";

import Home from "src/pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/start" component={Counter} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;