import { MdClose } from "react-icons/md";
import { Line } from 'react-chartjs-2';

const PortefeuilleModal = ({ handleOpenModal, historique }) => {


    const getDates = () => {
        const dates = [];

        historique.map((h) => {
            const dateTrunced = h.date.slice(0, 10);
            const hourTrunced = h.date.slice(11, 16);
            const dateOrdered = dateTrunced.split("-").reverse().join("/");
            const hourOrdered = hourTrunced.split(":").join("h");

            return dates.push(`le ${dateOrdered} à ${hourOrdered}`)
        })

        // Du plus ancien au plus récent
        return dates.reverse();
    };

    const getValues = () => {

        const values = [];

        historique.map((h) => {
            return values.push(h.value);
        });

        // Du plus ancien au plus récent
        return values.reverse();

    };


    const data = {
        labels: getDates(),
        datasets: [
          {
            label: 'Montant en € de votre portefeuille',
            data: getValues(),
            fill: false,
            height: "700px",
            backgroundColor: '#1fc36c',
            borderColor: '#1fc36c',
          },
        ],
      };
      
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    getValues()

    return (
        <section className="fixed top-0 right-100 bg-black z-50 w-full h-screen overflow-y-scroll">
            <nav className="bg-black w-full h-18 border-b-2 border-grey p-4">
                <button className="float-left text-white align-middle" onClick={() => handleOpenModal}><MdClose size={24}/></button>
                <h2 className="text-center font-roboto text-white text-xl font-bold">Vos gains</h2>
            </nav>
            <main className="h-full w-full max-w-screen-lg m-auto mt-16 px-8">
                <Line data={data} options={options} className="font-roboto text-sm"/>
            </main>
        </section>
    )
};

export default PortefeuilleModal;