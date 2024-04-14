import React from 'react';

const TextInputLarge = ({
  label,
  value,
  onChange,
  isInvalid,
  placeholder = label,
  labelFontSize = 'text-sm',
  locked = false,
  width = "400px",
  inputHeight = '100px'
}) => {
  const containerStyle = {
    position: 'relative', // Conteneur relatif pour la pseudo-étiquette
    width
  };

  const inputStyle = {
    height: inputHeight,
    lineHeight: 'normal',
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    ...locked ? { backgroundColor: '#f8f8f8', color: '#637831' } : {}
  };

  const labelStyle = {
    position: 'absolute',
    left: '20px',
    top: '12px', // Ajuster en fonction de la position souhaitée
    color: '#aaa', // Couleur grise typique pour un placeholder
    display: value ? 'none' : 'block' // Cache la pseudo-étiquette lorsque l'input a du contenu
  };

  return (
    <div className="flex flex-col text-left" style={containerStyle}>
      <label className={`mb-2 ${labelFontSize} font-medium ${locked ? 'text-dark-grey' : 'text-gray-700'}`}>{label}</label>
      <div style={{ position: 'relative' }}> {/* Conteneur relatif pour positionnement absolu */}
        <span style={labelStyle}>{placeholder}</span> {/* Pseudo-étiquette comme placeholder */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          autoComplete={label.toLowerCase().includes('email') ? 'email' : 'off'}
          className={`w-full rounded-md border text-base text-body-color outline-none ${isInvalid ? 'border-custom-red' : 'border-gray-300 focus:border-custom-blue focus:border-5 focus:ring-0'} ${locked ? 'cursor-not-allowed bg-light-gray text-[#637831]' : 'text-body-color'}`}
          style={inputStyle}
          disabled={locked}
        />
      </div>
      <p className={`mt-2 text-sm transition-opacity duration-300 ease-in-out ${isInvalid ? 'text-red-500 opacity-100' : 'opacity-0'}`}>
        Veuillez entrer une adresse mail valide
      </p>
    </div>
  );
};

export default TextInputLarge;
