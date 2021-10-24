import { useEffect, useState } from "react";
import PortefeuilleModal from "../Modal/PortefeuilleModal";

const Header = ({ historique }) => {

    const [openPortefeuilleModal, setOpenPortefeuilleModal] = useState(false);

    const handleOpenModal = () => {
        setOpenPortefeuilleModal(prevState => !prevState);
    };

    return (
        <section onClick={handleOpenModal} className="cursor-pointer">
            {openPortefeuilleModal && <PortefeuilleModal handleOpenModal={handleOpenModal} historique={historique}/>}
            <header className="bg-black w-full h-36 flex justify-center items-center bg-particules bg-cover">
                <h2 className="font-roboto font-bold text-5xl text-white text-center">{historique[0].fields.value} €</h2>
            </header>
        </section>
    )
};

export default Header;