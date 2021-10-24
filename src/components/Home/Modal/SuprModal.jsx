import { useState } from "react";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { deleteCryptos } from "../../../services/cryptos";
import { historiqueFollowSuppr } from "../../../services/historique";


const SuprModal = ({ handleOpenSuprModal, filteredCryptosNames, filteredCryptosPriceAndNames }) => {

    const [value, setValue] = useState({
        select : "",
        quantite : "",
    });
    const [price, setPrice] = useState("");

    const allValuesDone = Object.keys(value).every((k) => value[k]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setValue(prevState => ({
            ...prevState,
            [name] : value
        }));


        // Recherche du prix par rapport au choix utilisateur pour l'enregistrement de l'historique
        for (let i = 0; i < filteredCryptosPriceAndNames.length; i++) {

            if (filteredCryptosPriceAndNames[i].name === value) {

                setPrice(filteredCryptosPriceAndNames[i].price)
            } else {
                return;
            }
        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = await deleteCryptos(value);

        toast.success(data.message);


        if (data.follow) {

            const newDatas = {
                name : value.select,
                quantite : value.quantite,
                prix : price
            }

            historiqueFollowSuppr(newDatas)
        }

        setValue({
            select : "",
            quantite : ""
        });
       
    };

    return (
        <section className="absolute top-0 right-100 bg-black z-50 w-full h-full overflow-hidden">
            <nav className="bg-black w-full h-18 border-b-2 border-grey p-4">
                <button className="float-left text-white align-middle" onClick={handleOpenSuprModal}><MdClose size={24}/></button>
                <h2 className="text-center font-roboto text-white text-xl font-bold">Supprimer une transaction</h2>
            </nav>
            <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center justify-start px-20 max-w-screen-md m-auto mt-16 relative">
                <div className="w-full relative bg-search bg-left my-8">
                    <select name="select" value={value.select} onChange={handleChange} className="font-roboto outline-none w-full h-12 bg-transparent text-white border border-white px-2">
                        <option  className="font-roboto w-full pl-2 bg-black" value="">Sélectionner une crypto</option>
                        {filteredCryptosNames && filteredCryptosNames.map((c, index) => (
                            <option className="bg-black active:bg-white active:text-black font-roboto " key={index} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <input placeholder="Quantité" name="quantite" onChange={handleChange} className="font-roboto my-8 outline-none w-full h-12 bg-transparent text-white border border-white px-2 bg-coins" type="number" value={value.quantite} />
                <button onClick={handleSubmit}  disabled={!allValuesDone} className={`mt-60 bg-white w-full py-4 font-bold uppercase rounded outline-none ${allValuesDone ? '' : 'bg-opacity-60'}`}>Valider</button>
            </form>
        </section>
    )
};

export default SuprModal;