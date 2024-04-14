import React, { useState } from "react";
import Importance from "./Importance.jsx";
import EditModal from "./EditModal.jsx";

// Composant pour l'entête du tableau
const TableHeader = ({ isAllSelected, toggleAll }) => {
    return (
        <div className="px-4 py-3 bg-indigo-50 rounded-tl-md rounded-tr-md flex items-center">
            <div className="px-3 w-[46px]">
                <input type="checkbox" checked={isAllSelected} onChange={toggleAll} />
            </div>
            <div className="w-[300px] px-4 font-inter font-bold">Critère</div>
            <div className="w-[142px] px-4 font-inter font-bold">Importance</div>
            <div className="w-[300px] px-4 font-inter font-bold">Description</div>
            <div className="w-[137px] px-8 font-inter font-bold">Action</div>
        </div>
    );
};

// Composant pour une ligne de données
const DataRow = ({ critere, importance, description, isSelected, toggle }) => {
    return (
        <div className={`px-4 py-6 flex items-center border-b border-zinc-200 ${isSelected ? "bg-gray-200" : ""}`}>
            <div className="px-3 w-[46px]">
                <input type="checkbox" checked={isSelected} onChange={toggle} />
            </div>
            <div className="w-[300px] px-4 font-inter">{critere}</div>
            <div className="w-[142px] px-4 font-inter">
                <Importance importance={importance} />
            </div>
            <div className="w-[300px] px-4 font-inter">{description}</div>
            <div className="w-[137px] px-8 font-inter">
                <EditModal />
            </div>
        </div>
    );
};

// Composant principal pour le tableau
const TableCriteria = ({ data }) => {
    const [selectedIds, setSelectedIds] = useState(new Set());

    const toggleAll = () => {
        // Utiliser l'index comme ID pour gérer la sélection de tous les éléments
        const newSelected = new Set(selectedIds.size < data.length ? data.map((_, index) => index) : []);
        setSelectedIds(newSelected);
    };

    const toggle = (index) => {
        // Gérer la sélection/désélection d'un seul élément
        const newSelectedIds = new Set(selectedIds);
        newSelectedIds.has(index) ? newSelectedIds.delete(index) : newSelectedIds.add(index);
        setSelectedIds(newSelectedIds);
    };

    const isAllSelected = selectedIds.size === data.length;

    return (
        <div className="bg-white rounded-tl-md rounded-tr-md">
            <TableHeader isAllSelected={isAllSelected} toggleAll={toggleAll} />
            {data.map((item, index) => (
                <DataRow key={index} {...item} isSelected={selectedIds.has(index)} toggle={() => toggle(index)} />
            ))}
        </div>
    );
};

export default TableCriteria;
