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
import IntroPage from "./pages/IntroPage";

function App() {
  const state = useContext(GlobalState)
  const [isLoggedIn] = state.isLoggedIn
  const [isAdmin] = state.isAdmin
  
  return (
    <BrowserRouter>
    <div className="w-full h-screen bg-gray-200" style={{backgroundImage: 'url(banner.jpg)',backgroundSize: 'cover'}}>
      <div className="w-full h-screen" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <Header/>
      <Switch>
      <Route path="/" exact component={IntroPage} />
      <Route path="/home" exact component={Home} />
      <Route path="/signin" exact component={Login} />
      {isAdmin && <Route path="/register" exact component={Register} />}
      {isAdmin && <Route path="/workers" exact component={Workers} />}
      {isLoggedIn && <Route path="/details/:id" exact component={Details} />}
      {isLoggedIn && !isAdmin && <Route path="/request" exact component={Request} />}
      {isAdmin && <Route path="/transactions/:id" exact component={Transaction} />}
      {isAdmin && <Route path="/construction" exact component={ConstructionSite} />}
      {isAdmin && <Route path="/assign" exact component={AssignWorkers} />}
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
