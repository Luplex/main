import React from 'react';

const TextInput = ({ label, value, onChange, isInvalid, placeholder = label, labelFontSize = 'text-sm', locked = false, width = "400px" }) => {
  return (
    <div className="flex flex-col text-left" style={{ width: width }}>
      <label className={`mb-2 ${labelFontSize} font-medium ${locked ? 'text-dark-grey' : 'text-gray-700'}`}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        autoComplete={label.toLowerCase().includes('email') ? 'email' : 'off'}
        className={`w-full rounded-md border px-5 py-3 text-base text-body-color outline-none ${isInvalid ? 'border-custom-red' : 'border-gray-300 focus:border-custom-blue focus:border-5 focus:ring-0'} ${locked ? 'cursor-not-allowed bg-light-gray text-[#637831]' : 'text-body-color'}`}
        placeholder={placeholder}
        disabled={locked}
        style={locked ? { backgroundColor: '#f8f8f8', color: '#637831' } : {}}
      />
      <p className={`mt-2 text-sm transition-opacity duration-300 ease-in-out ${isInvalid ? 'text-red-500 opacity-100' : 'opacity-0'}`}>
        Veuillez entrer une adresse mail valide
      </p>
    </div>
  );
};

export default TextInput;
