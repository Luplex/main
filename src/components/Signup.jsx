import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import TextInput from '../subcomponents/TextInput.jsx';
import PasswordInput from "../subcomponents/PasswordInput.jsx";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import { Link, useNavigate } from 'react-router-dom';

// Fonction pour valider l'adresse e-mail
const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!isValidEmail(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (password !== confirmPassword || !password) {
      setPasswordError(password === '');
      setConfirmPasswordError(password !== confirmPassword);
      isValid = false;
    } else {
      setPasswordError(false);
      setConfirmPasswordError(false);
    }

    if (isValid) {
      const newUser = { email, password };
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      navigate('/guideSign'); // Redirection vers la page de connexion
    }
  };

    return (
    <section className='bg-gray-1 '>
      <div>
        <div>
          <div>
            <div className="overflow-hidden rounded-lg bg-white px-10 py-5 text-center sm:px-12 md:px-[60px]" style={{ width: '520px'}}>
              <div className="pt-4">
                <img src={Logo} alt="logo" className="h-12   mx-auto" />
              </div>
              <h2 className="text-l font-medium text-custom-grey"style={{paddingTop:'20px',paddingBottom:'20px'}}>
                Inscrivez-vous pour accéder à l'outil
              </h2>
              <form onSubmit={handleSignup}>

                <div className="mb-2 flex justify-center">
                <TextInput label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={emailError} />
                </div>
                <div className="mb-2 flex justify-center">
                <PasswordInput label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}isInvalid={passwordError} />

                </div>
                <div className="mb-2 flex justify-center">
                <PasswordInput label="Confirmation du mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} isInvalid={confirmPasswordError} />
                </div>   
                <div className='mb-2 flex justify-center'>
                  <TextInput label="Adresse email manager (optionnel)" />
                </div>
                <div className='mb-3'>
                  <ButtonFill label="Inscription" width='400px'></ButtonFill>
                </div>              
              </form>
              
              <div className="mb-2 mt-4">
                <p className="text-base text-body-color dark:text-dark-6">
                  <span className="text-gray-500 text-base font-normal  leading-normal">
                  Vous êtes déjà membre ?{" "}</span>
                  <Link to="/" className="font-medium text-blue-600">Connectez-vous</Link>
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
