import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "src/pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;