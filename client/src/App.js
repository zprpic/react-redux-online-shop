import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
