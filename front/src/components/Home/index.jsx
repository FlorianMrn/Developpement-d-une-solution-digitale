import { useState, useEffect } from "react";
import { getCryptosListings } from "../../services/cryptos";
import { getHistorique } from "../../services/historique";
import Nav from "./Nav";
import Header from "./Header";
import Stats from './Stats';

const Home = ({ auth }) => {

    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {

        if (auth) {
          getCryptosListings().then((res) => {
            setCryptos(res.data)
          });
        }
        
    }, []);

    const getHisto = async () => {

      try {
        const data = await getHistorique();
      } catch (error) {

      }
    };

    const datas = [
      {
          "model": "historique.historique",
          "pk": 8,
          "fields": {
              "date": "2021-10-22T13:29:26.861Z",
              "value": 486991.0,
              "portefeuille": 1
          }
      },
      {
          "model": "historique.historique",
          "pk": 7,
          "fields": {
              "date": "2021-10-22T13:29:05.754Z",
              "value": 491991.0,
              "portefeuille": 1
          }
      },
      {
          "model": "historique.historique",
          "pk": 6,
          "fields": {
              "date": "2021-10-22T13:26:53.106Z",
              "value": 491981.0,
              "portefeuille": 1
          }
      },
      {
          "model": "historique.historique",
          "pk": 5,
          "fields": {
              "date": "2021-10-22T13:23:12.357Z",
              "value": 496981.0,
              "portefeuille": 1
          }
      },
      {
          "model": "historique.historique",
          "pk": 4,
          "fields": {
              "date": "2021-10-22T11:07:08.610Z",
              "value": 496881.0,
              "portefeuille": 1
          }
      },
      {
          "model": "historique.historique",
          "pk": 3,
          "fields": {
              "date": "2021-10-22T11:06:40.636Z",
              "value": 501881.0,
              "portefeuille": 1
          }
      },
      {
          "model": "historique.historique",
          "pk": 2,
          "fields": {
              "date": "2021-10-22T10:48:39.566Z",
              "value": 1881.0,
              "portefeuille": 1
          }
      },
      {
          "model": "historique.historique",
          "pk": 1,
          "fields": {
              "date": "2021-10-22T10:41:50.855Z",
              "value": 1900.0,
              "portefeuille": 1
          }
      }
  ];


    return (
        <section className="flex flex-col h-screen">
            <Nav cryptos={cryptos}/>
            <Header historique={datas}/>
            <Stats cryptos={cryptos}/>
        </section>
    )
   
};

export default Home;