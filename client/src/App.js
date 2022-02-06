import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConstructionSite from "./pages/constructionSite";
import Workers from "./pages/workers";
import { useContext } from "react";
import Request from "./pages/Request";
import Details from "./pages/Details";
import Transaction from "./pages/Transaction";
import AssignWorkers from "./pages/AssignWorkers";
import { GlobalState } from "./GlobalState";

function App() {
  const state = useContext(GlobalState)
  const [isLoggedIn] = state.isLoggedIn
  const [isAdmin] = state.isAdmin
  
  return (
    <BrowserRouter>
    <div className="w-full">
      <Header/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={Login} />
      {isAdmin && <Route path="/register" exact component={Register} />}
      {isAdmin && <Route path="/workers" exact component={Workers} />}
      {isLoggedIn && !isAdmin && <Route path="/request" exact component={Request} />}
      {isLoggedIn && <Route path="/details/:id" exact component={Details} />}
      {isAdmin && <Route path="/construction" exact component={ConstructionSite} />}
      {isAdmin && <Route path="/transactions/:id" exact component={Transaction} />}
      {isAdmin && <Route path="/assign" exact component={AssignWorkers} />}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
