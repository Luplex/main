import React, { useEffect, useRef, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
const DeleteModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

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
          Supprimer
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
             Attention
            </h3>
            

            
            <h4 className="text-base font-normal text-gray-500 mb-6 text-center">
            Vous êtes sur le point de supprimer 5 contrats. 
Cette action est irréversible.</h4>
            
<div className=" flex flex-wrap justify-between w-full">
  <div className="">
    <button
      onClick={() => setModalOpen(false)}
      className="block rounded-md border border-stroke text-center text-base font-medium text-dark transition   dark:text-white"
      style={{width:"198px", height:"50px"}}
    >
      Non, annuler
    </button>
  </div>
  <div className="">
    <button
    onClick={() => setModalOpen(false)}
      className="block rounded-md border border-primary bg-custom-red text-center text-base font-medium text-white transition "
      style={{width:"198px", height:"50px"}}
    >
      Oui, supprimer
    </button>
  </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
