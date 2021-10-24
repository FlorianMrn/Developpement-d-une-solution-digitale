import { Switch, Route, Redirect } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Login from './components/Login';
import { getIsAuthenticated } from './services/auth';
import PrivateRoute from './services/PrivateRoute';

function App() {

  const auth = getIsAuthenticated();

  return (
    <div className="App">
      <Switch>
        <PrivateRoute 
          exact={true}
          path="/"
          component={Home}
          auth={auth}
        />
        <Route exact path="/login" component={Login} />
        {!auth ? <Redirect to="/login"/> : <Redirect to="/"/> }
      </Switch>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
