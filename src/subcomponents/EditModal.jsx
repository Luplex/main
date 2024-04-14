import React, { useEffect, useRef, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import TextInput from '../subcomponents/TextInput.jsx';
import TextInputLarge from '../subcomponents/TextInputLarge.jsx';
import DropdownComponent from '../subcomponents/DropdownComponent.jsx';
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useToasts } from "../components/ToastContext.jsx";

const EditModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);
  const { addToast } = useToasts(); // Utilisez la fonction addToast pour afficher un message toaster


  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Close if the ESC key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className="text-custom-blue rounded-full bg-primary text-base font-medium "
        >
          Modifier
        </button>
        <div
          className={` bg-black bg-opacity-50 z-10 fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}

            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
              Modifier le critère
            </h3>
            <span
              className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-custom-blue"
            ></span>
            
            <TextInput width="430px"label="Nom du critère" />
            <TextInputLarge width="430px" label="Description" />
            <div className="mb-10">
            <h1 className={`text-left mb-2 text-sm font-medium text-gray-700'}`}>Importance</h1>

            <DropdownComponent label="Séléctionner une option" width="430px"options={[{ label: "Haute" }, { label: "Moyenne" },  { label: "Faible" }]} />
            </div>
     
            
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
              <button onClick={() => {
    addToast('Les modifications ont été enregistrées avec succès.');
    setModalOpen(false);
}}
className="text-inter block w-full rounded-md border border-primary bg-custom-blue p-3 text-center text-base font-medium text-white ">
    Enregistrer
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
