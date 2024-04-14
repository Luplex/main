import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import TextInput from '../subcomponents/TextInput.jsx';
import PasswordInput from "../subcomponents/PasswordInput.jsx";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import { Link, useNavigate } from 'react-router-dom';

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const Signin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    setIsEmailInvalid(!isValidEmail(email) || !email);
    setIsPasswordInvalid(!password);

    if ((email === 'admin' && password === 'admin') || isValidEmail(email) && password) {
        // Connexion réussie avec admin/admin ou avec une adresse email valide
        onLoginSuccess(); // Cette fonction doit être appelée après une connexion réussie
        navigate('/dashboard'); // Rediriger vers le tableau de bord ou une autre page de votre choix
    } else {
        // Afficher une erreur si les champs sont invalides
        return;
    }
};

  return (
    <section className="bg-gray-1  dark:bg-dark lg:py-[120px]">
      <div className="">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div className="relative overflow-hidden rounded-lg bg-white px-10 pt-10 pb-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]"style={{ width: '520px', height: '596px' }}>
              <div className=""> 
                <a
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <img src={Logo} alt="logo" className="h-12" />
                </a>
              </div>
              <h2  className=" text-l font-medium text-custom-grey " style={{paddingTop:'20px',paddingBottom:'20px'}}>
                Connectez-vous pour accéder à l'outil
              </h2> 

              <form onSubmit={handleSignin}>
                <div className="mb-2 flex justify-center">
                  <TextInput label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={isEmailInvalid} />
                </div>
                <div className="mb-2 flex justify-center">
                  <PasswordInput label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} isInvalid={isPasswordInvalid} />
                </div>
              <div className="text-left mb-6 flex justify-center">
              <a href="" className="text-left font-medium text-custom-blue"style={{ width: '400px' }}>
                Mot de passe oublié ?
              </a>
              </div>
              <div className="mb-6">
                
              <ButtonFill label="Connexion" width="400px"/>
              </div>
              </form>
              <div className="mt-10">
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="text-gray-500 text-base font-normal leading-normal">Vous n’êtes pas encore membre ? </span>
                <Link to="/signup" className="text-l font-medium text-custom-blue">Inscrivez-vous</Link>

              </p>
              </div>

              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;


