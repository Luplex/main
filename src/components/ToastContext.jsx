import React, { createContext, useContext, useState,useEffect } from 'react';

const ToastContext = createContext();

export function useToasts() {
  return useContext(ToastContext);
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const generateUniqueId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};


  const addToast = (message) => {
    console.log('1the message is', message);
    const id = generateUniqueId();
    setToasts([...toasts, { id, message }]);

    setTimeout(() => {
        setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
    }, 3000); // ajustez la durée si nécessaire
};

  const removeToast = (id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};

import SuccessToaster from '../subcomponents/SuccessToaster'; // Assurez-vous que ce chemin est correct

const Toast = ({ id, message, onClose }) => {
  console.log('the message is', message);
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), 3000); // Les toasts disparaissent après 3 secondes
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return <SuccessToaster message={message} onClose={() => onClose(id)} />;
};



export const ToastContainer = () => {
  const { toasts, removeToast } = useToasts();

  return (
    <div className="fixed top-0 right-0 p-4 space-y-2 z-50">
      {toasts.map(toast => (
        <Toast key={toast.id} message={toast.message} onClose={removeToast} />
      ))}
    </div>
  );
};
