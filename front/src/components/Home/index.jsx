import Nav from "./Nav";
import Header from "./Header";
import Stats from './Stats';

const Home = ({ cryptos }) => {

    return (
        <section className="flex flex-col h-screen">
            <Nav cryptos={cryptos}/>
            <Header />
            <Stats cryptos={cryptos}/>
        </section>
    )
   
};

export default Home;