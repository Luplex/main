// import React, { useEffect } from 'react';
// import { useToasts } from './ToastContext';
// import SuccessToaster from '../subcomponents/SuccessToaster'; // Assurez-vous que ce chemin est correct

// const Toast = ({ id, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => onClose(id), 3000); // Les toasts disparaissent après 3 secondes
//     return () => clearTimeout(timer);
//   }, [id, onClose]);

//   return <SuccessToaster />;
// };

// export const ToastContainer = () => {
//   const { toasts, removeToast } = useToasts();

//   return (
//     <div className="fixed bottom-0 right-0 p-4 space-y-2">
//       {toasts.map(toast => (
//         <Toast key={toast.id} onClose={removeToast} />
//       ))}
//     </div>
//   );
// };
