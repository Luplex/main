import React from "react";
import ButtonFill from "../subcomponents/ButtonFill";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
const GuideSign = ({ onLoginSuccess }) => {
    const navigate = useNavigate();

    const handleclick = () => {
        onLoginSuccess(); // Appeler onLoginSuccess après une action réussie
        navigate('/dashboard'); // Naviguer vers le tableau de bord
    }

    return (
        <section className="bg-gray-1 dark:bg-dark lg:py-[120px] flex justify-center items-center h-screen">
            <div className="w-full max-w-[652px] overflow-hidden rounded-lg bg-white px-10 pt-10 pb-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
            <div className=""> 
                <a
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <img src={Logo} alt="logo" className="h-12" />
                </a>
              </div>
                <div className="text-center mt-2 mb-6">
                    <span className="text-gray-900 text-3xl font-bold font-inter leading-[48px]">Bienvenue sur </span>
                    <span className="text-blue-600 text-3xl font-bold font-inter leading-[48px]">Scorify</span>
                </div>
                <p className="text-inter text-s mb-6" style={{ width: '560px' }}>
                Avant de commencer, voici une rapide démo afin de vous montrer les bases d’utilisation de l’outil.
                </p>
                <div className="video-responsive mb-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/REVeqcS2aEU?si=5w8lacodmcwqavIq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="mb-6">
                    <ButtonFill label="Commencer à utiliser Scorify" width="560px" onClick={handleclick} />
                </div>
            </div>
        </section>
    );
}

export default GuideSign;
