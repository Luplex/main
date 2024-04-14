import React, { useState } from 'react';

// Ajoutez des props pour recevoir l'onglet actif et la fonction de mise à jour.
const ButtonGroup = ({ active, onButtonClick }) => {
  return (
    <div className="flex items-center justify-center rounded-md shadow-sm border border-gray-300" role="group" style={{ height: '50px' }}>
      <button
        onClick={() => onButtonClick('contrats')}
        className={`font-medium rounded-l-md py-3 px-4 transition-all ${
          active === 'contrats' ? 'bg-custom-blue text-white' : 'bg-white text-gray-700'
        }`}
      >
        Contrats
      </button>
      <button
        onClick={() => onButtonClick('affaires')}
        className={`font-medium py-3 px-4 transition-all rounded-r-md ${
          active === 'affaires' ? 'bg-custom-blue text-white' : 'bg-white text-gray-700'
        }`}
      >
        Affaires
      </button>
    </div>
  );
};

export default ButtonGroup;
