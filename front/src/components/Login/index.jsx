import { useState } from "react";
import { authenticate } from "../../services/auth";
import { toast } from "react-toastify";

const Login = ({ history }) => {

    const [values, setValues] = useState({
        email : "",
        password : ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues(prevState => ({
            ...prevState,
            [name] : value
        }))
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        authenticate(values).then(() => {
            history.replace("/");
            toast.success("Vous êtes connecté !")
        })
        .catch((error)  => {
            console.log("erreur lors de la connexion", error)
            toast.error("Une erreur est survenue, email ou mot de passe incorrect!");
        });
    };

    const allValuesDone = Object.keys(values).every((k) => values[k]);


    return (
        <section className="h-screen w-full bg-black px-4 py-8 flex flex-col justify-center items-center">
            <h1 className="font-akzi text-white text-center text-4xl font-bold mb-4">Crypto Tracker</h1>
            <h2 className="font-roboto text-white text-center text-2xl font-bold">Se Connecter</h2>
            <form onSubmit={handleSubmit} className="mt-8" autoComplete="off">
                <input autoComplete="off" placeholder="Email" name="email" onChange={handleChange} className="font-roboto my-4 outline-none w-full h-12 bg-transparent text-white border border-white px-2" type="email" value={values.email} />
                <input autoComplete="off" placeholder="Mot de passe" name="password" onChange={handleChange} className="font-roboto my-4 outline-none w-full h-12 bg-transparent text-white border border-white px-2" type="password" value={values.password} />
                <button onClick={handleSubmit}  disabled={!allValuesDone} className={`mt-8 bg-white w-full py-4 font-bold uppercase rounded outline-none ${allValuesDone ? '' : 'bg-opacity-60'}`}>Se connecter</button>
            </form>
        </section>
    )
};

export default Login;