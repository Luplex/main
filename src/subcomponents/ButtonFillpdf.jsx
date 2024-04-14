import React from 'react';
import html2pdf from 'html2pdf.js';
import { useToasts } from "../components/ToastContext.jsx";  // Assurez-vous que ce chemin est correct

const ButtonFillpdf = ({ label, width = '175px', height='50px'}) => {
  const { addToast } = useToasts();  // Utilisez la fonction addToast pour afficher un message toaster
  const buttonStyle = {
    width,
    height
  };

  const exportPDF = () => {
    const element = document.getElementById('content-to-export');
    if (!element) {
      addToast("Aucun contenu à exporter.");
      return;
    }
    const options = {
      margin: 10,
      filename: 'exported-page.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' } // Orientation modifiée ici
    };

    html2pdf().from(element).set(options).save()
      .then(() => {
        addToast("L'export a été généré avec succès.");
      })
      .catch(() => {
        addToast("Erreur lors de la création du PDF.");
      });
  };

  return (
    <button 
      className='bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      style={buttonStyle}
      onClick={exportPDF}
    >
      {label}
    </button>
  );
}

export default ButtonFillpdf;
