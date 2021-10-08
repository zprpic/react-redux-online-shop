import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/cart" exact component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
