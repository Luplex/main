import React, { useState } from "react";
import Score from "./Score.jsx";
import TeamAvatars from "./TeamAvatars.jsx";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import DropdownIcon from "../subcomponents/DropdownIcon.jsx";

// Composant pour l'entête du tableau
const TableHeader = ({ isAllSelected, toggleAll }) => {
    return (
        <div className="px-4 py-3 bg-indigo-50 rounded-tl-md rounded-tr-md flex items-center">
            <div className="w-[240px] px-4 font-inter font-bold"></div>
            <div className="w-[240px] px-3 font-inter font-bold">Maintenance et hébergement (Logitec)</div>
            <div className="w-[240px] px-3 font-inter font-bold">Fournitures et équipements (Safran)</div>
            <div className="flex-grow px-4 font-inter font-bold"></div>
        </div>
    );
};

// Composant pour une ligne de données
const DataRow = ({ id, criterium, tech1, tech2, score, index, isSelected, toggle }) => {
    const displayTech1 = index === 0 ? <Score score={tech1} /> : `${tech1}/10`;
    const displayTech2 = index === 0 ? <Score score={tech2} /> : `${tech2}/10`;
    return (
        <div className={`px-4 py-6 flex items-center border-b border-zinc-200 ${isSelected ? "bg-gray-200" : ""}`}>
            <div className="w-[240px] px-4 font-inter">{criterium}</div>
            <div className="w-[240px] px-2 font-inter">{displayTech1}</div>
            <div className="w-[240px] px-2 font-inter">{displayTech2}</div>
        </div>
    );
};

// Composant principal pour le tableau
const Table = ({ data }) => {
    const [selectedIds, setSelectedIds] = useState(new Set());

    const toggleAll = () => {
        if (selectedIds.size < data.length) {
            setSelectedIds(new Set(data.map((item) => item.id)));
        } else {
            setSelectedIds(new Set());
        }
    };

    const toggle = (id) => {
        const newSelectedIds = new Set(selectedIds);
        console.log("Current state before toggle:", Array.from(selectedIds));
        console.log("Toggling id:", id);

        if (newSelectedIds.has(id)) {
            newSelectedIds.delete(id);
        } else {
            newSelectedIds.add(id);
        }

        console.log("New state after toggle:", Array.from(newSelectedIds));
        setSelectedIds(newSelectedIds);
    };

    const isAllSelected = selectedIds.size === data.length;

    return (
        <div className="bg-white rounded-tl-md rounded-tr-md ">
            <TableHeader isAllSelected={isAllSelected} toggleAll={toggleAll} />
            {data.map((item, index) => {
                if (!item.id) {
                    console.error("Invalid item without id:", item);
                }
                return (
                    <DataRow
                        key={item.id}
                        {...item}
                        isSelected={selectedIds.has(item.id)}
                        toggle={toggle}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default Table;
