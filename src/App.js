import './App.css';
import { JobCenter, Dashboard } from "./Container";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JobCenter} />
        <Route  path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
