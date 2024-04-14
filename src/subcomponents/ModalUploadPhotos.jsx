import React, { useEffect, useRef, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useToasts } from "../components/ToastContext.jsx";
const ModalUploadPhotos = () => {
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
          Modifier ma photo
        </button>
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-50 px-4 py-5 z-10 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold sm:text-2xl">
              Modifier ma photo
            </h3>
            

            <span
              className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-custom-blue"
            ></span>
            <h4 className="text-base font-normal text-gray-500 mb-6 text-left">
  Importer un fichier
</h4>
            <div className="w-full h-[140px] mb-10 px-3 py-6 bg-white rounded-lg border border-zinc-200 flex-col justify-center items-center gap-2 inline-flex">
    <div className="p-2 bg-indigo-50 rounded-[50px] justify-center items-center  inline-flex">
        <div className="" />
        <ArrowUpTrayIcon className="h-5 w-5 text-indigo-500"/>
    </div>
    <div className="self-stretch h-12 flex-col justify-center items-center flex">
        <div className="self-stretch text-center text-gray-900 text-sm font-normal font-inter leading-normal">Importer ou glisser-déposer</div>
        <div className="self-stretch text-center text-gray-500 text-sm font-normal font-inter leading-normal">Format autorisé : png, jpg</div>
    </div>
</div>
<div className=" flex flex-wrap justify-between w-full">
  <div className="">
    <button
      onClick={() => setModalOpen(false)}
      className="block rounded-md border border-stroke text-center text-base font-medium text-dark transition   dark:text-white"
      style={{width:"198px", height:"50px"}}
    >
      Annuler
    </button>
  </div>
  <div className="">
  <button onClick={() => {
    addToast('Les modifications ont été enregistrées avec succès.');
    setModalOpen(false);
}}
      className="block rounded-md border border-primary bg-custom-blue text-center text-base font-medium text-white transition "
      style={{width:"198px", height:"50px"}}
    >
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

export default ModalUploadPhotos;
