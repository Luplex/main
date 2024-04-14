import React from "react";
import { useToasts } from "../components/ToastContext.jsx";  // Assurez-vous que ce chemin est correct

const ButtonOutline = ({
    label,
    onClick,
    width = "175px",
    height = "50px",
    toaster = false
}) => {
    const { addToast } = useToasts();  // Utilisez la fonction addToast pour afficher un message toaster
    const buttonStyle = {
        width,
        height,
        border: "1px solid",
    };

    const handleClick = () => {
        if (toaster) {
            addToast("L'export a été généré avec succès.");  // Message de toaster personnalisable
        }
        if (onClick) {
            onClick();  // Assurez-vous d'exécuter également la fonction onClick passée en props
        }
    };

    return (
        <button
            className="rounded bg-white px-4 py-2 text-blue-700 font-bold border-blue-700 hover:bg-gray-50"
            style={buttonStyle}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default ButtonOutline;
