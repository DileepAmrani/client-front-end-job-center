import './App.css';
import { JobCenter } from "./Container";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JobCenter} />
      </Switch>
    </Router>
  );
}

export default App;
