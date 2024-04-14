import React, { useEffect, useRef, useState } from "react";
import TextInput from '../subcomponents/TextInput.jsx';
import DropdownComponent from '../subcomponents/DropdownComponent.jsx';
import ButtonFill from "./ButtonFill.jsx";
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import { useToasts } from "../components/ToastContext.jsx";


const ModalNewFournisseur = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modal = useRef(null);
    const trigger = useRef(null);
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { addToast } = useToasts(); // Utilisez la fonction addToast pour afficher un message toaster

    // Close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (modalOpen && modal.current && !modal.current.contains(target) && !trigger.current.contains(target)) {
          setModalOpen(false);
        }
      };

      document.addEventListener('mousedown', clickHandler);
      return () => document.removeEventListener('mousedown', clickHandler);
    }, [modalOpen]);

    // Close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (keyCode === 27) {
          setModalOpen(false);
        }
      };

      document.addEventListener('keydown', keyHandler);
      return () => document.removeEventListener('keydown', keyHandler);
    }, []);

    const handleNext = () => {
      navigate('/fournisseurs/1/edit'); // Navigate to the specified path
      addToast("Les modifications ont été enregistrées avec succès."); // Add a toaster message here

      setModalOpen(false); // Optionally close the modal
    };

    return (
      <>
        <div>
          <ButtonFill 
            ref={trigger}
            label="Nouveau fournisseur" 
            icon={true} 
            height="50px" 
            onClick={() => setModalOpen(true)}
          />
          <div
            className={`bg-black bg-opacity-50 z-10 fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
              modalOpen ? "block" : "hidden"
            }`}
          >
            <div
              ref={modal}
              className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
            >
              <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                Nouveau fournisseur
              </h3>
              <span
                className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-custom-blue"
              ></span>
              
              <TextInput width="430px" label="Nom de l'entreprise" />
              <TextInput width="430px" label="Nom du contact" />

              
              
       
              <div className="-mx-3 flex flex-wrap">
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition dark:text-white"
                  >
                    Annuler
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button onClick={handleNext} className="text-inter block w-full rounded-md border border-primary bg-custom-blue p-3 text-center text-base font-medium text-white">
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ModalNewFournisseur;
