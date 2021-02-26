import './App.css';
import { JobCenter, Dashboard, TalentCenter, MySetting, MyAnalytics} from "./Container";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JobCenter} />
        <Route  path="/dashboard" component={Dashboard} />
        <Route  path="/talent-center" component={TalentCenter} />
        <Route  path="/my-setting" component={MySetting} />
        <Route  path="/analytics" component={MyAnalytics} />
      </Switch>
    </Router>
  );
}

export default App;
