import { useState } from "react";
import Table from "../subcomponents/Table";
import TableContrat from "../assets/TableContrat.json";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import ButtonOutline from "../subcomponents/ButtonOutline.jsx";
import SearchBar from "../subcomponents/SearchBar.jsx";
import DropDownButton from "../subcomponents/DropDownButton.jsx";
import Pagination from "../subcomponents/Pagination.jsx";
import ButtonRecommandation from "../subcomponents/ButtonRecommandation.jsx";
import * as XLSX from "xlsx";
import React from "react";
import DeleteModal from "../subcomponents/DeleteModal.jsx";
import { Link } from "react-router-dom";
import ModalNewContrat from "../subcomponents/ModalNewContrat.jsx";

const Contrats = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedService, setSelectedService] = useState(["Marketing", "Développement", "Support"]);
    const [scoreRange, setScoreRange] = useState(["Aucun", "0-25", "26-50", "51-100"]);

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const onChangeScoreRange = (newSelectedRanges) => {
        setScoreRange(newSelectedRanges);
    };

    const onChangeService = (newSelectedService) => {
        setSelectedService(newSelectedService);
    };

    const filterByService = (contract) => {
        if (selectedService.length === 0) {
            return true; // Afficher tous les contrats si aucun service n'est sélectionné
        }
        const showService = selectedService.some((service) => {
            switch (service) {
                case "Marketing":
                    return contract.service === "Alex Semuyel";
                case "Développement":
                    return contract.service === "Patrice Martin";
                case "Support":
                    return contract.service === "Support";
                default:
                    return false;
            }
        });
        return showService;
    };
    const filterContracts = (contract) => {
        return searchQuery
            ? contract.title.toLowerCase().includes(searchQuery) || contract.id.toLowerCase().includes(searchQuery)
            : true;
    };

    const filterByScore = (contract) => {
        if (scoreRange.length === 0) {
            return true; // Afficher tous les contrats si aucune plage n'est sélectionnée
        }

        const showScore = scoreRange.some((range) => {
            switch (range) {
                case "Aucun":
                    return contract.score < 0;
                case "0-25/100":
                    return contract.score >= 0 && contract.score <= 25;
                case "26-50/100":
                    return contract.score >= 26 && contract.score <= 50;
                case "51-100/100":
                    return contract.score >= 51 && contract.score <= 100;
                default:
                    return true;
            }
        });
        return showScore;
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

    return (
        <>
            <div className="px-16 py-10">
                <ButtonRecommandation />
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold">Contrats</h1>
                    <div className="flex gap-3">
                        <ButtonOutline label="Exporter (.xls)" onClick={exportToExcel} toaster={true} />
                        <ModalNewContrat />
                    </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <SearchBar placeholder="Rechercher par affaire, contrat, ID ..." onSearch={handleSearch} />
                    <div className="flex gap-2">
                        <DropDownButton
                            label="Filtrer par service"
                            options={["Achats", "Juridique", "Logistique", "Marketing", "R&D", "RH", "Autres"]}
                            onChange={onChangeService}
                        />
                        <DropDownButton
                            label="Filtrer par score"
                            options={["0-25/100", "26-50/100", "51-100/100", "Aucun"]}
                            onChange={onChangeScoreRange}
                        />
                    </div>
                </div>
                <div className="mb-5 mt-2 flex gap-2">
                    <DeleteModal />{" "}
                    <Link to="/contrats/comparer">
                        <button className="text-custom-blue rounded-full bg-primary text-base font-medium ">
                            Comparer
                        </button>
                    </Link>
                </div>
                <Table data={TableContrat.filter((contract) => filterContracts(contract) && filterByScore(contract))} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            </div>
        </>
    );
};

export default Contrats;
