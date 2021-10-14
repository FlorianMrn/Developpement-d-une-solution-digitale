import { Switch, Route } from 'react-router';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Home />
      </Switch>
    </div>
  );
}

export default App;
