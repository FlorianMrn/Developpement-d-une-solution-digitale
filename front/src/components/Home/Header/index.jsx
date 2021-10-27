import { useState, useEffect } from "react";
import PortefeuilleModal from "../Modal/PortefeuilleModal";
import { getHistorique } from "../../../services/historique";

const Header = ({openAddModal, openSuprModal}) => {

    const [openPortefeuilleModal, setOpenPortefeuilleModal] = useState(false);
    const [historiques, setHistoriques] = useState([]);

    const getHisto = async () => {
        
        getHistorique().then((response) => setHistoriques(response.data))
        // const response  = await getHistorique();
        // setHistoriques(response.data);
    };

    useEffect(() => {

        getHisto();
        
    }, [openAddModal, openSuprModal]);

    const handleOpenModal = () => {
        setOpenPortefeuilleModal(prevState => !prevState);
    };

    return (
        <section onClick={handleOpenModal} className="cursor-pointer">
            {openPortefeuilleModal && <PortefeuilleModal handleOpenModal={handleOpenModal} historique={historiques}/>}
            <header className="bg-black w-full h-36 flex justify-center items-center bg-particules bg-cover">
                {historiques.length > 0 && <h2 className="font-roboto font-bold text-5xl text-white text-center">{historiques.length > 0 ? historiques[0].value.toLocaleString() : "Pas de transactions enregistrées"} €</h2>}
            </header>
        </section>
    )
};

export default Header;