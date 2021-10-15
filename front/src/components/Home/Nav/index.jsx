import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import AddModal from "../Modal/AddModal";

const Nav = ({ cryptos }) => {

    const [openAddModal, setOpenAddModal] = useState(false);
    const [openSuprModal, setOpenSuprModal] = useState(false);

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

    return (
        <section className={`${openAddModal && 'h-screen'}`}>
        {openAddModal && <AddModal handleOpenAddModal={handleOpenAddModal} filteredCryptosNames={filteredCryptosNames()}/>}
        <nav className="bg-black w-full h-18 border-b-2 border-grey p-4">
                <div className="w-full h-full flex justify-between items-center">
                    <h1 className="font-akzi text-white font-bold text-2xl">Crypto Tracker</h1>
                    <div>
                        <button className="text-white mx-8"><FaPen size={20}/></button>
                        <button onClick={handleOpenAddModal} name="openAddModal" className="text-white mx-2"><FaPlus size={20}/></button>
                    </div>
                </div>
            </nav>
        </section>
    )
};

export default Nav;