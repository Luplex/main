import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PasswordInput = ({ label, value, onChange, isInvalid }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="flex flex-col text-left" style={{ width: '400px' }}>
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative mb-2">
        <input
          type={isHidden ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          className={`w-full rounded-md border px-5 py-3 text-base text-body-color outline-none ${isInvalid ? 'border-custom-red' : 'border-gray-300 focus:border-custom-blue'} focus:ring-0 dark:text-white`}
          placeholder={label}
        />
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={toggleVisibility}>
          {isHidden ? (
            <EyeSlashIcon className="h-5 w-5 text-gray-500 hover:text-blue-600" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-500 hover:text-blue-600" />
          )}
        </button>
      </div>
      <p className={`text-sm transition-opacity duration-300 ease-in-out ${isInvalid ? 'text-red-500 opacity-100' : 'opacity-0'}`}>
        Veuillez entrer un mot de passe valide
      </p>
    </div>
  );
};

export default PasswordInput;
