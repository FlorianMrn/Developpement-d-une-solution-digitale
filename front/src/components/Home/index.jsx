import Nav from "./Nav";
import Header from "./Header";
import Stats from './Stats';
import { useState } from "react";

const Home = () => {

    const [openAddModal, setOpenAddModal] = useState(false);
    const [openSuprModal, setOpenSuprModal] = useState(false);

    return (
        <section className="flex flex-col h-screen">
            <Nav 
                openAddModal={openAddModal}
                setOpenAddModal={setOpenAddModal}
                openSuprModal={openSuprModal}
                setOpenSuprModal={setOpenSuprModal}
            />
            <Header openAddModal={openAddModal} openSuprModal={openSuprModal}/>
            <Stats/>
        </section>
    )
   
};

export default Home;