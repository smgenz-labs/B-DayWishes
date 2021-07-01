import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import CardForm from "./CardForm";

const App = () => {
  return (
    <>
      {/*<div className="coming__soon">
          <h1>Coming Soon..</h1>
      </div>*/}
      <Router>
        <Switch>
          <Route path="/Forms" component={CardForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
