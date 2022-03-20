import React from "react";
import Home from "./routes/Home"
import Movies from "./components/Movies"
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
