import React from "react";

const Score = ({ score }) => {
  // Fonction pour déterminer la couleur en fonction du score
  const bgColorClass = () => {
    if (score <= 25 && score > 0) {
      return "bg-custom-green"; // Classe pour vert
    } else if (score <= 50 && score > 0) {
      return "bg-custom-yellow"; // Classe pour jaune
    } else if (score <= 100 && score > 0) {
      return "bg-custom-red"; // Classe pour rouge
    } else {
      return "bg-light-gray"; // Classe pour gris par défaut
    }
  };

  return (
    <div className={`w-[105px] h-[26px] px-2.5 py-[3px] ${bgColorClass()} rounded-[30px] justify-center items-center gap-px inline-flex`}>
      <div className="text-white text-xs font-bold leading-tight">
        {score > 0 ? `${score}/100` : "-"}
      </div>
    </div>
  );
}

export default Score;
