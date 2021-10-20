import { Switch, Route, Redirect } from 'react-router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Login from './components/Login';
import { getCryptosListings } from './services/cryptos';
import { getIsAuthenticated } from './services/auth';
import PrivateRoute from './services/PrivateRoute';

function App() {

  const [cryptos, setCryptos] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getCryptosListings().then((res) => setCryptos(res.data));
    setAuth(getIsAuthenticated());
  }, [auth]);

  console.log(auth)

  return (
    <div className="App">
      <Switch>
        <PrivateRoute 
          exact={true}
          path="/"
          component={Home}
          cryptos={cryptos}
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
