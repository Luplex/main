import React from "react";

const Importance = ({ importance }) => {
  console.log(importance);
  const label = importance === "1" ? "Faible" : importance === "2" ? "Moyenne" : "Haute";
  // Fonction pour déterminer la couleur en fonction du statut
  

  return (
    <div className={`w-[105px] h-[26px] px-2.5 py-[3px] bg-zinc-200 rounded-[30px] justify-center items-center gap-px inline-flex`}>
      <div className="text-black text-xs font-bold leading-tight">
        {label}
      </div>
    </div>
  );
};

export default Importance;
