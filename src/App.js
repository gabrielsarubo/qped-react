import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ViewQuestion from "./view/ViewQuestion";
import Topics from "./view/Topics";

import './index.css';

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main>
        <Switch>
          <Route exact path="/topics" component={Topics} />
          <Route path="/topics/:subject/:idQuestion" component={ViewQuestion} />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
