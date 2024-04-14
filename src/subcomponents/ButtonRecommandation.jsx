import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

// ButtonRecommandation data for FAQs
const faqs = [
    {
        question: "Stratégie d’offre / Schéma contractuel",
        answer: "To create a new contract, navigate to the 'New Contract' section in your dashboard and fill in the required information.",
    },
    {
        question: "Elaboration / Négociations termes et conditions",
        answer: "Yes, you can export your contracts by clicking on the 'Export (.xls)' button on the contracts page.",
    },
    {
        question: "Flow-down / Note de cadrage des achats",
        answer: "The score on your contract represents the health of the contract based on various performance metrics.",
    },
    {
        question: "Identification des risques et opportunités contractuels (ROCs)",
        answer: "You can filter your contracts by service or score using the dropdown filters at the top of the contracts page.",
    },
    {
        question: "Gestion des risques et opportunités contractuels (ROCs)",
        answer: "Recommendations are suggestions or actions that you can take to improve contract management and performance.",
    },
    {
        question: "Identification des exigences",
        answer: "To create a new contract, navigate to the 'New Contract' section in your dashboard and fill in the required information.",
    },
    {
        question: "Elaboration / Négociations termes et conditions",
        answer: "Yes, you can export your contracts by clicking on the 'Export (.xls)' button on the contracts page.",
    },
    {
        question: "Suivi des exigences et jalons contractuels (paiement ...)",
        answer: "The score on your contract represents the health of the contract based on various performance metrics.",
    },
    {
        question: "Plan d’action contractuel (CMP)",
        answer: "You can filter your contracts by service or score using the dropdown filters at the top of the contracts page.",
    },
    {
        question: "Traitement et suivi des échanges et communications contractuels",
        answer: "Recommendations are suggestions or actions that you can take to improve contract management and performance.",
    },
    // {
    //     question: "Traitement et suivi des écarts, différends, modification et avenants (retards, surcoûts ...)",
    //     answer: "Recommendations are suggestions or actions that you can take to improve contract management and performance.",
    // },
    // {
    //     question: "Maitrise et contrôle de la sous-traitance",
    //     answer: "To create a new contract, navigate to the 'New Contract' section in your dashboard and fill in the required information.",
    // },
    // {
    //     question: "Gestion et traitement des réclamations, précontentieux",
    //     answer: "Yes, you can export your contracts by clicking on the 'Export (.xls)' button on the contracts page.",
    // },
    // {
    //     question: "Suivi et traitement des contentieux",
    //     answer: "The score on your contract represents the health of the contract based on various performance metrics.",
    // },
    // {
    //     question: "Garantie, clôture et REX/RETEX",
    //     answer: "You can filter your contracts by service or score using the dropdown filters at the top of the contracts page.",
    // },
    // {
    //     question: "Archivage, documentation et enregistrement",
    //     answer: "Recommendations are suggestions or actions that you can take to improve contract management and performance.",
    // },
];

const ButtonRecommandation = () => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="fixed bottom-10 right-10">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    <InformationCircleIcon className="h-12 w-12" />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="border-blue-700 relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="absolute bottom-[100px] right-6 p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=" border-2 border-blue-600 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex justify-between items-center">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            Recommandations
                                        </Dialog.Title>
                                        <div>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md  text-sm font-medium text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                                                onClick={closeModal}
                                            >
                                                Fermer
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        {faqs.map((faq, index) => (
                                            <Disclosure key={index} as="div" className="pt-2">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full  py-2 text-sm font-medium text-left text-grey-500  rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                                            <span>{faq.question}</span>
                                                            {open ? (
                                                                <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <ChevronDownIcon
                                                                    className="h-6 w-6"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel as="dd" className="pr-12">
                                                            <p className="text-base leading-7 text-gray-600">
                                                                {faq.answer}
                                                            </p>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ButtonRecommandation;
