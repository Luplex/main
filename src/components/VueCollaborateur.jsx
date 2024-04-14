import React,{ useState } from "react";
import profilepicture from "../assets/femme_1.png";
import TableCta from "../subcomponents/TableCta.jsx";
import TableContrat from "../assets/TableContrat.json";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import ButtonOutline from "../subcomponents/ButtonOutline.jsx";
import Pagination from "../subcomponents/Pagination.jsx";
import * as XLSX from "xlsx";

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
                case "0-25":
                    return contract.score >= 0 && contract.score <= 25;
                case "26-50":
                    return contract.score >= 26 && contract.score <= 50;
                case "51-100":
                    return contract.score >= 51 && contract.score <= 100;
                default:
                    return false;
            }
        });
        return showScore;
    };

    const exportToExcel = () => {
        console.log("Exporting to Excel");
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
            <div className="px-16 pt-10 pb-1 " style={{ width: "1194px" }}>
                <h1 className="text-4xl font-bold">Stéphanie Durant</h1>
                <div className="flex items-center justify-between my-4 " style={{ width: "210px" }}>
                    <img className="h-16 w-16 rounded-full" src={profilepicture} alt="Profile" />
                    <p>
                        <span className="font-bold">ID membre</span> 123
                    </p>
                </div>
            </div>

            <div className="px-16 pt-6 pb-5">
                <div className="mb-5">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">Contrats liés</h2>
                        <div className="flex gap-3">
                            <ButtonFill label="Exporter (.xls)" onClick={exportToExcel} toaster={true} />
                        </div>
                    </div>

                    <TableCta data={TableContrat} path="/contrats/1" />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>

                <div className="mb-5">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">Affaires liées</h2>
                        <div className="flex gap-3">
                            <ButtonFill label="Exporter (.xls)" onClick={exportToExcel} toaster={true}/>
                        </div>
                    </div>

                    <TableCta data={TableContrat} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
            </div>
        </>
    );
};

export default Contrats;
