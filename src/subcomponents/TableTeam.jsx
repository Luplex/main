import React, { useState } from "react";
import Score from "./Score.jsx";
import TeamAvatars from "./TeamAvatars.jsx";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import DropdownIcon from "../subcomponents/DropdownIcon.jsx";
import Statut from "./Statut.jsx";
import { useToasts } from "../components/ToastContext.jsx";
// Composant pour l'entête du tableau
const TableHeader = ({ isAllSelected, toggleAll }) => {
    return (
        <div className="px-4 py-3 bg-indigo-50 rounded-tl-md rounded-tr-md flex items-center">
            <div className="px-3 w-[80px]">
                <input type="checkbox" checked={isAllSelected} onChange={toggleAll} />
            </div>
            <div className="w-[80px] text-left font-inter font-bold">Id</div>
            <div className="w-[200px] text-left font-inter font-bold">Nom complet</div>
            <div className="w-[242px] text-left font-inter font-bold">Contact</div>
            <div className="w-[137px] text-left font-inter font-bold">Rôle</div>
            <div className="w-[137px] text-left font-inter font-bold">Statut</div>
            <div className="w-[100px] text-left font-inter font-bold">Contrats</div>
            <div className="flex-grow text-left font-inter font-bold"></div>
        </div>
    );
};

// Composant pour une ligne de données
const DataRow = ({ id, fullName, contact, role, statut, contrats, avatars, dateCreated, isSelected, toggle }) => {
    return (
        <div className={`px-4 py-6 flex items-center border-b border-zinc-200 ${isSelected ? 'bg-gray-200' : ''}`}>
            <div className="px-3 w-[80px]">
                <input type="checkbox" checked={isSelected} onChange={() => toggle(id)} />
            </div>
            <div className="w-[80px] text-left font-inter">{id}</div>  
            <div className="w-[200px] text-left font-inter">{fullName}</div>
            <div className="w-[242px] text-left font-inter">{contact}</div>
            <div className="w-[137px] text-left font-inter">{role}</div>
            <div className="w-[137px] text-left font-inter"><Statut statut={statut}/></div>
            <div className="w-[100px] text-left font-inter">
                <DropdownIcon 
                    option1="Voir"
                    path1="/account/vue-collaborateur"
                    option2="Renvoyer l'invitation"
                    path2="/account"
                    onOption2Click={(e) => {
                        e.preventDefault();  // Prévenir la navigation
                        addToast('Invitation renvoyée avec succès');
                      }}
                />
            </div>
            <div className="flex-grow"></div>
        </div>
    );
};

// Composant principal pour le tableau
const TableTeam = ({ data }) => {
    const { addToast } = useToasts();
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
        if (newSelectedIds.has(id)) {
            newSelectedIds.delete(id);
        } else {
            newSelectedIds.add(id);
        }
        setSelectedIds(newSelectedIds);
    };

    const isAllSelected = selectedIds.size === data.length;

    return (
        <div className="bg-white rounded-tl-md rounded-tr-md ">
            <TableHeader isAllSelected={isAllSelected} toggleAll={toggleAll} />
            {data.map((item, index) => (
                <DataRow
                    key={item.id} // il vaut mieux utiliser un identifiant unique s'il est disponible
                    {...item}
                    isSelected={selectedIds.has(item.id)}
                    toggle={toggle}
                    addToast={addToast}
                />
            ))}
        </div>
    );
};

export default TableTeam;
