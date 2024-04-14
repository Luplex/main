import React from "react";

const ProgressBar = ({ score = 0 }) => {
  // Définir une fonction pour déterminer la couleur en fonction du score
  const getColor = (score) => {
    if (score < 3) {
      return "bg-custom-green";
    } else if (score < 7) {
      return "bg-custom-yellow";
    } else {
      return "bg-custom-red";
    }
  };

  // Calculer la largeur de la barre en pourcentage
  const barWidth = Math.max(0, Math.min(100, score * 10)); // Assure que la valeur est entre 0 et 100

  const barStyle = {
    width: `${barWidth}%`
  };

  return (
    <div className="w-[195px] bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className={`${getColor(score)} h-2 rounded-full transition-width duration-700 ease-in-out`}
        style={barStyle}>
      </div>
    </div>
  );
};

export default ProgressBar;
