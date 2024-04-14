import React from "react";

const Statut = ({ statut }) => {
  // Fonction pour déterminer la couleur en fonction du statut
  const bgColorClass = () => {
    console.log(statut);
    if (statut === "Actif") {
      return "bg-success-light"; // Classe pour vert
    } else if (statut === "Invité") {
      return "bg-warning-light"; // Classe pour jaune
    }
    return "bg-light-gray"; // Classe par défaut
  };

  return (
    <div className={`w-[105px] h-[26px] px-2.5 py-[3px] ${bgColorClass()} rounded-[30px] justify-center items-center gap-px inline-flex`}>
      <div className="text-black text-xs font-bold leading-tight">
        {statut}
      </div>
    </div>
  );
};

export default Statut;
