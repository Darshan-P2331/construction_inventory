import Header from "./components/Header";
import Home from "./pages/Home";
import {Route} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConstructionSite from "./pages/constructionSite";
import Workers from "./pages/workers";
import Request from "./pages/Request";

function App() {
  return (
    <div className="w-full">
      <Header/>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/workers" exact component={Workers} />
      <Route path="/request" exact component={Request} />
      <Route path="/construction" exact component={ConstructionSite} />
    </div>
  );
}

export default App;
