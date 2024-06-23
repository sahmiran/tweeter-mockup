import { Switch, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </>
  );
}

export default App;
