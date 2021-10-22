import { useState, useEffect } from "react";
import { getCryptosListings } from "../../services/cryptos";
import Nav from "./Nav";
import Header from "./Header";
import Stats from './Stats';

const Home = ({ auth }) => {

    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {

        if (auth) {
          getCryptosListings().then((res) => {
            console.log(res.data)
            setCryptos(res.data)
          });
        }
        
    }, []);

    return (
        <section className="flex flex-col h-screen">
            <Nav cryptos={cryptos}/>
            <Header />
            <Stats cryptos={cryptos}/>
        </section>
    )
   
};

export default Home;