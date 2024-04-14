import { useState } from "react";
import profilepicture from "../assets/homme_1.png";
import TableCta from "../subcomponents/TableCta.jsx";
import TableSupplierLies from "../subcomponents/TableSupplierLies.jsx";
import TableAffaire from "../assets/TableAffaire.json";
import TableCriteriaContrat from "../subcomponents/TableCriteriaContrat.jsx";
import TableCritere from "../assets/TableCritere.json";
import TableCritereVue from "../assets/TableCritereVue.json";
import TableFournisseur from "../assets/TableFournisseur.json";
import TableEdit from "../subcomponents/TableEdit.jsx";
import TableEditcontent from "../assets/TableEdit.json";
import AlertComponent from "../subcomponents/AlertComponent.jsx";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import NewEditCriteria from "../subcomponents/NewEditCriteria.jsx";
import TextArea from "../subcomponents/TextArea.jsx";
// import ButtonOutline from "../subcomponents/ButtonOutline.jsx";
import Pagination from "../subcomponents/Pagination.jsx";
import * as XLSX from "xlsx";
import React from "react";
import ButtonRecommandation from "../subcomponents/ButtonRecommandation.jsx";
import { useNavigate } from "react-router-dom";

const VueContrats = () => {
    const [totalScore, setTotalScore] = useState("-");
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedService, setSelectedService] = useState(["Marketing", "Développement", "Support"]);
    const [scoreRange, setScoreRange] = useState(["Aucun", "0-25", "26-50", "51-100"]);
    const navigate = useNavigate();

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const onChangeScoreRange = (newSelectedRanges) => {
        setScoreRange(newSelectedRanges);
    };

    const onChangeService = (newSelectedService) => {
        setSelectedService(newSelectedService);
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(TableContrat);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Contracts");
        XLSX.writeFile(wb, "Contracts.xlsx");
    };

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleEdit = () => {
        navigate("/contrats/1/edit");
    }
    return (
        <>
            {/* header */}

            <div className="px-16 pt-10 pb-5">
                <ButtonRecommandation />
                <div className="flex justify-between items-center mb-5">
                    {/* Titre et boutons */}
                    <h1 className="text-4xl font-bold">Contrat Logitec</h1>
                    <div className="flex gap-3">
                        <ButtonFill label="Voir le contrat" fill={false} icon={true} iconType="arrow" height="50px" />
                        <ButtonFill label="Modifier" fill={true} icon={false} iconType="arrow" height="50px" onClick={handleEdit} />{" "}
                    </div>
                </div>
                {/* Profil fournisseur et image */}
                <div className="flex items-center justify-between my-4">
                    <div className="flex flex-col gap-3">
                        <p className="text-gray-500 font-bold">1 - Maintenance et hébergement</p>
                        <p className="text-gray-500 font-bold">Interlocuteur : Samuel Fournier</p>
                        <img className="h-10 w-10 rounded-full" src={profilepicture} alt="Profile" />
                    </div>
                </div>
                {/* Alerte */}
                <AlertComponent score={40} />

                {/* Table */}
                {/* <TableEdit className="mt-5 mb-5" data={TableEditcontent} onScoreChange={setTotalScore} /> */}

                <div className="mb-10">
                    <TableCriteriaContrat data={TableCritereVue.contrats} onScoreChange={setTotalScore} />
                </div>

                <div className="mb-5">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">Affaires liées</h2>
                    </div>

                    <TableCta data={TableAffaire} path="/affaires/1" />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>

                <div className="mb-5">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">Fournisseurs liés</h2>
                    </div>

                    <TableSupplierLies data={TableFournisseur} path="/fournisseurs/1" />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
            </div>
        </>
    );
};

export default VueContrats;
