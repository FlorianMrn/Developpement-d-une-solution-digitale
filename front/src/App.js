import { Switch, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import { getCryptosListings } from './services/cryptos';

function App() {

  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    getCryptosListings().then((res) => setCryptos(res.data));
  }, []);


  return (
    <div className="App">
      <Switch>
        <Home cryptos={cryptos}/>
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
