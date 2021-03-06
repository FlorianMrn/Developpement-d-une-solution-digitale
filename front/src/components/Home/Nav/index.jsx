import { useState, useEffect } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import AddModal from "../Modal/AddModal";
import SuprModal from "../Modal/SuprModal";
import { getCryptosListings } from "../../../services/cryptos";


const Nav = ({ openAddModal, setOpenAddModal, openSuprModal, setOpenSuprModal }) => {

    const [cryptos, setCryptos]= useState([]);

    useEffect( () => {

        const setter = async () => {
            const result = await getCryptosListings();
            setCryptos(result ? result.data : []);
        };

        setter();
    
    }, []);

    const handleOpenAddModal = () => {
        setOpenAddModal(prevState => !prevState);
    };

    const handleOpenSuprModal = () => {
        setOpenSuprModal(prevState => !prevState);
    };

    const filteredCryptosNames = () => {

        let names = [];

        cryptos.map(c => names.push(c.name))

        return names;
    };

    const filteredCryptosPriceAndNames = () => {
        let namesAndPrices = [];

        cryptos.map((c) => {
             return namesAndPrices.push({name : c['name'], price : c.quote.EUR.price}) 
        });

        return namesAndPrices;
    };

    return (
        <section className={`${openAddModal && 'h-screen'}`}>
        {openAddModal && <AddModal handleOpenAddModal={handleOpenAddModal} filteredCryptosNames={filteredCryptosNames()} />}
        {openSuprModal && <SuprModal handleOpenSuprModal={handleOpenSuprModal} filteredCryptosNames={filteredCryptosNames()} filteredCryptosPriceAndNames={filteredCryptosPriceAndNames()}/>}
        <nav className="bg-black w-full h-18 border-b-2 border-grey p-4">
                <div className="w-full h-full flex justify-between items-center">
                    <h1 className="font-akzi text-white font-bold text-2xl">Crypto Tracker</h1>
                    <div>
                        <button onClick={handleOpenSuprModal} className="text-white mx-8"><FaPen size={20}/></button>
                        <button onClick={handleOpenAddModal} name="openAddModal" className="text-white mx-2"><FaPlus size={20}/></button>
                    </div>
                </div>
            </nav>
        </section>
    )
};

export default Nav;