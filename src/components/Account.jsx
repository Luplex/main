import React from 'react';
import ButtonFill from '../subcomponents/ButtonFill.jsx';
import profilepicture from '../assets/homme_1.png';
import MyInfo from '../subcomponents/MyInfo.jsx';
import ModalUploadPhotos from '../subcomponents/ModalUploadPhotos.jsx';
import InviteCollaborator from '../subcomponents/InviteCollaborator.jsx';
import MyTeam from '../subcomponents/MyTeam.jsx';
import ButtonOutline from '../subcomponents/ButtonOutline.jsx';
import * as XLSX from "xlsx";
import TableAccount from '../assets/TableAccount.json';
import { useToasts } from "../components/ToastContext.jsx"; // Assurez-vous que ce chemin est correct
const Account = () => {
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(TableAccount);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Account");
        XLSX.writeFile(wb, "Account.xlsx");
    };
    const { addToast } = useToasts();
    const handleSave = () => {
        // Logique pour sauvegarder les données ici...
        addToast('Les modifications ont été enregistrées avec succès.');  // Affiche un message de confirmation
    }
    return (
        <div id='content-to-export' className="px-16 py-10 "style={{width:"1194px"}}>
            <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-custom-grey">Mon compte</h1>
        <div style={{ display: 'flex', gap: '18px' }}>
        <div className="flex gap-3">
                        <ButtonOutline label="Exporter (.xls)" onClick={exportToExcel} toaster={true}/>
                        <InviteCollaborator/>
                    </div>
        </div>
        </div>

        <div className='inline-flex items-start justify-start gap-6'>
        <img className="h-16 w-16 rounded-full" src={profilepicture} alt="Profile" />
        <div className=''>
        <ModalUploadPhotos />
        <span className="text-gray-500 text-base font-normal leading-normal font-inter">Recommandé : 500 x 500 px (png, jpg)</span>
                
        </div>





      </div>
        <div className='mt-10 '>
         <MyInfo />
        
        </div>
        <div className='justify-end mt-10 flex gap-3'>
        <ButtonOutline label="Annuler" width='100px'/>
        <button
          className={`bg-custom-blue text-white font-bold py-2 px-4 rounded `}
          style={{ height: '50px', width: '141px' }}
            onClick={handleSave}
        >
           Enregistrer        </button>
        </div>
        <div className='mt-10'>
            <MyTeam />
        </div>
      
        </div>
    );
};
export default Account;
