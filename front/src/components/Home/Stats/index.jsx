import { MdTrendingUp, MdTrendingDown, MdTrendingFlat } from "react-icons/md";
import { useEffect, useState } from "react";
import { getCryptosListings } from "../../../services/cryptos";

// Logos local
import btc from '../../../assets/icons/btc.svg';
import eth from '../../../assets/icons/eth.svg';
import bnb from '../../../assets/icons/bnb.svg';
import ada from '../../../assets/icons/ada.svg';
import usdt from '../../../assets/icons/usdt.svg';

const Stats = () => {

    const [cryptos, setCryptos]= useState([]);

    useEffect(() => {

        const setter = async () => {

            const result = await getCryptosListings()
            setCryptos(result ? result.data : []);
        };

        setter();
        
    }, []);

    const getLogoImage = (name) => {

        switch (name) {
            case 'Bitcoin':
                return btc;
            case 'Ethereum':
                return eth;
            case 'Binance Coin':
                return bnb;
            case 'Cardano':
                return ada;
            case 'Tether':
                return usdt;
            default:
              return null;
        }
    };

    const getTendance = (value) => {

        if (value > 1 && value < 5) {
            return <MdTrendingUp size={24}/>
        }

        if (value > 0 && value < 1) {
            return <MdTrendingFlat size={24}/>
        }

        if (value > 5) {
            return  <div>
                        <MdTrendingUp className="inline" size={24}/>
                        <MdTrendingUp className="inline" size={24}/>
                    </div>
        }

        if (value < 0 && value > -5) {
            return <MdTrendingDown size={24}/>
        }

        if (value < -5) {
            return  <div>
                        <MdTrendingDown className="inline" size={24}/>
                        <MdTrendingDown className="inline" size={24}/>
                    </div>
        }
    };


    return (
        <main className="w-full h-full bg-black flex-1">
            <ul className="w-full h-full flex flex-col justify-center items-center px-12 relative max-w-screen-md m-auto">
                {cryptos && cryptos.map((crypt, index) => (
                   <li key={index} className="w-full border-b-2 border-grey py-4 flex flex-row justify-between items-center">
                       <p className="text-left w-auto text-white inline font-roboto align-top">
                           <img src={getLogoImage(crypt.name)} alt="crypto logo" className="w-6 inline mr-4 align-top"/>
                           <span className="font-bold font-roboto text-white text-xl align-bottom">{crypt.symbol}</span> ({crypt.name})
                        </p>
                        <div className="float-right text-white inline flex flex-col items-center">
                            <p className="font-roboto text-xs text-grey">{crypt.quote.EUR.percent_change_24h.toFixed(2)}%</p>
                            {getTendance(crypt.quote.EUR.percent_change_24h)}
                            <p className="font-roboto text-xs text-grey">Sur 24h</p>
                        </div>
                    </li> 
                ))}
            </ul>
        </main>
    )
};

export default Stats;