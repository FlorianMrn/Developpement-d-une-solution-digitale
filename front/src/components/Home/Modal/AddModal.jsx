import { MdClose } from "react-icons/md";


const AddModal = ({ handleOpenAddModal }) => {

    return (
        <section className="absolute top-0 right-100 bg-black z-50 w-full h-full">
            <nav className="bg-black w-full h-18 border-b-2 border-grey p-4">
                <button className="float-left text-white align-middle" onClick={handleOpenAddModal}><MdClose size={24}/></button>
                <h2 className="text-center font-roboto text-white text-xl font-bold">Ajouter une transaction</h2>
            </nav>
            <div>

            </div>
        </section>
    )
};

export default AddModal;