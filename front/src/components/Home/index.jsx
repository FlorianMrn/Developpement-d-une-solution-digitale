import Nav from "./Nav";
import Header from "./Header";
import Stats from './Stats';

const Home = () => {

    return (
        <section className="flex flex-col h-screen">
            <Nav />
            <Header />
            <Stats />
        </section>
    )
   
};

export default Home;