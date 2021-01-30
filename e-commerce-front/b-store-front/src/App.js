import "./App.css";
import Body from "./Home/Body";
import Header from "./Home/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Home/Signup";
import Signin from "./Home/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route path="/signin">
            <Header />
            <Signin />
          </Route>
          <Route path="/" exact>
            <Header />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
