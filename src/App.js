import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*-----pages-----*/
import { Home6 } from "./Home6";
import { NotFound } from "./404";
import BookSearchEngine from "./component/Portfolio/BookSearchEngine";
import Todolist from "./component/Portfolio/Todolist";
import './firebase';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home6} />
            <Route exact path="/book" component={BookSearchEngine} />
            <Route exact path="/todo" component={Todolist} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
