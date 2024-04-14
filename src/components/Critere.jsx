import React, { useState } from "react";
import ButtonGroup from "../subcomponents/ButtonGroup.jsx";
import NewCriteria from "../subcomponents/NewCriteria.jsx";
import DeleteModal from "../subcomponents/DeleteModal.jsx";
import TableCriteria from "../subcomponents/TableCriteria.jsx";
import TableCritere from "../assets/TableCritere.json"; // Assurez-vous que ce chemin est correct
import Pagination from "../subcomponents/Pagination.jsx";

const Critere = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    const [activeTab, setActiveTab] = useState("contrats");
    const tableData = TableCritere[activeTab] || []; // Accès correct aux données basées sur activeTab

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="content-to-export" className="px-16 py-10">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <div className="text-gray-900 text-[40px] font-bold font-inter leading-[48px]">Critères d’évaluation</div>
                    <div className="mt-2 text-gray-500 text-base font-normal font-inter leading-normal">Définissez vos critères d’évaluation afin de donner un score à vos contrats et affaires</div>
                </div>
                <ButtonGroup active={activeTab} onButtonClick={handleButtonClick} />
            </div>

            <div className="flex justify-between items-center mb-10">
                <div className="text-gray-900 text-3xl font-bold font-inter leading-[48px]">Evaluer les {activeTab}</div>
                <NewCriteria />
            </div>
            <div className="mb-5"><DeleteModal /></div>
            <div className="mb-10"><TableCriteria data={tableData} /></div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
};

export default Critere;
