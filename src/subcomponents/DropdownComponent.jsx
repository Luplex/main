import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Hook pour gérer les clics en dehors du composant dropdown
const useOutsideClick = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };

        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

const DropdownComponent = ({ label, options,width="33Opx" }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

    return (
        <div ref={dropdownRef} className="relative" style={{width:width}}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex justify-between items-center bg-white border border-light-gray rounded-lg px-4 py-2 w-full text-gray-500 hover:bg-gray-50 transition-colors"
                style={{ height: '50px', width: width }}
            >
                {label}
                <ChevronDownIcon className="w-4 h-4 ml-2" />
            </button>
            {isDropdownOpen && (
                <div className="absolute w-full bg-white border border-light-gray rounded-md shadow-lg z-10 mt-1">
                    {options.map((option, index) => (
                        <a key={index} href={option.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {option.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownComponent;
