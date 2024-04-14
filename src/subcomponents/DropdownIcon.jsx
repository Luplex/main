import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilisé pour la navigation dans une branche
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    }, []); // Exécutez ce useEffect uniquement lors du montage pour éviter des exécutions multiples

    return domNode;
};

const DropdownIcon = ({ option1 = "Voir", path1, option2 = "Modifier", path2, onOption1Click, onOption2Click }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let domNode = useClickOutside(() => setDropdownOpen(false));
    const navigate = useNavigate(); // Nécessaire pour la navigation sur les items

    return (
        <div className="relative inline-block" ref={domNode}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex justify-center items-center">
                <EllipsisVerticalIcon className="w-6 h-6"/> {/* Assurez-vous que l'icône est importée correctement */}
            </button>
            {dropdownOpen && (
                <div
                  className="absolute z-10 mt-2 bg-white shadow-lg rounded-md overflow-hidden"
                  style={{
                    right: '50%',
                    transform: 'translateX(50%)',
                    minWidth: '140px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <DropdownItem label={option1} path={path1} navigate={navigate} onClick={onOption1Click}/>
                  <DropdownItem label={option2} path={path2} navigate={navigate} onClick={onOption2Click}/>
                </div>
            )}
        </div>
    );
};

const DropdownItem = ({ label, path, navigate }) => {
    return (
        <div
            onClick={() => navigate(path)}
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700"
        >
            {label}
        </div>
    );
};

export default DropdownIcon;
