import React from "react";
import { useToasts } from "../components/ToastContext.jsx"; // Import the useToasts hook
import { PlusCircleIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const ButtonFill = ({
    label,
    height = "50px",
    width = "auto",
    fill = true,
    icon = false, // Boolean to show/hide icon
    iconType = "plus", // "plus" or "arrow", default is "plus"
    onClick,
    showToast = false, // New prop to control toast display
}) => {
    const { addToast } = useToasts(); // Get the addToast function from the context
    const iconColor = fill ? "text-white" : "text-blue-600";
    const buttonStyle = fill
        ? "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-sm"
        : "text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded shadow-sm";

    let IconComponent = null;
    if (icon) {
        if (iconType === "plus") {
            IconComponent = PlusCircleIcon;
        } else if (iconType === "arrow") {
            IconComponent = ArrowDownTrayIcon;
        }
    }

    const handleClick = () => {
        if (showToast) {
            addToast('Button clicked!'); // Customize this message as needed
        }
        if (onClick) {
            onClick(); // Execute any additional onClick logic provided via props
        }
    };

    return (
        <button className={buttonStyle} onClick={handleClick} style={{ width, height }}>
            {IconComponent ? (
                <div className="flex items-center">
                    <IconComponent className={`${iconColor} h-5 w-5`} />
                    <span className="ml-2">{label}</span>
                </div>
            ) : (
                label
            )}
        </button>
    );
};

export default ButtonFill;
