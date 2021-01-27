import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PublicNavbar from "./component/PublicNavbar";

function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
