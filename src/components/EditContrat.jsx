import React, { useState } from "react";
import TextInput from "../subcomponents/TextInput";
import DropdownComponent from '../subcomponents/DropdownComponent';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import ButtonOutline from "../subcomponents/ButtonOutline";
import DeleteModal from "../subcomponents/DeleteModal";
import TableEdit from "../subcomponents/TableEdit";
import TableEditcontent from "../assets/TableEdit.json";
import AlertComponent from "../subcomponents/AlertComponent";
import ButtonFill from "../subcomponents/ButtonFill";
import NewEditCriteria from "../subcomponents/NewEditCriteria";
import { useToasts } from "../components/ToastContext.jsx"; // Assurez-vous que ce chemin est correct


const dropdownOptions = [
    { label: 'Paul', href: '#' }
];
const dropdownOptions2 = [
    { label: 'Samuel', href: '#' }
];
const EditContrat = () => {
    const { addToast } = useToasts();

    const [totalScore, setTotalScore] = useState('-');
    const handleSave = () => {
        // Logique pour sauvegarder les données ici...
        addToast('Les modifications ont été enregistrées avec succès.');  // Affiche un message de confirmation
    };
    return (
        <div id="content-to-export" className="px-16 py-10 ">
      <h1 className="text-4xl font-bold text-custom-grey">Modifier contrat Logitec - 1</h1>
      <AlertComponent score={totalScore} />
      {/* div to put item in line */}
      <div className="flex " style={{"gap":"32px"}}>
       
      <TextInput 
                        label="Titre du contrat" 
                        value="Hébergement et maintenance" // Valeur initiale
                        onChange={(e) => {/* logic for handling change */}} // Gérer le changement
                        labelFontSize="text-lg" 
                        locked={false} // Assurez-vous que c'est modifiable
                        width="330px"
                    />
        <div style={{width:'330px'}}>
            <label className="mb-2 text-lg font-medium 'text-dark-grey" style={{ width:'330px',height: '28px' }}>Fournisseur</label>
                <div className="mt-2">
                    <DropdownComponent label="Logitec"  options={dropdownOptions} />
                </div>
            </div>
        
        <div style={{width:'330px'}}>
            <label className="mb-2 text-lg font-medium 'text-dark-grey" style={{ height: '28px' }}>Equipe</label>
                <div className="mt-2">
                    <DropdownComponent label="Stéphanie"  options={dropdownOptions2} />
                </div>
            </div>
        </div>
        <div className="mb-4 text-lg font-medium 'text-dark-grey">Importer un fichier</div>
        <div className="w-full h-[140px] mb-10 px-3 py-6 bg-white rounded-lg border border-zinc-200 flex-col justify-center items-center gap-2 inline-flex">
    <div className="p-2 bg-indigo-50 rounded-[50px] justify-center items-center  inline-flex">
        <div className="" />
        <ArrowUpTrayIcon className="h-5 w-5 text-indigo-500"/>
    </div>
    <div className="self-stretch h-12 flex-col justify-center items-center flex">
        <div className="self-stretch text-center text-gray-900 text-sm font-normal font-inter leading-normal">Importer ou glisser-déposer</div>
        <div className="self-stretch text-center text-gray-500 text-sm font-normal font-inter leading-normal">Format autorisé : png, jpg</div>
    </div>
</div>
           <h1 className="text-3xl font-bold text-custom-grey">Critères du contrat</h1>
           
           <TableEdit data={TableEditcontent} onScoreChange={setTotalScore} />
           <div className="mt-5 flex justify-between w-full">
  <div>
    <NewEditCriteria />
  </div>
  
  <div className="flex gap-3">
    <ButtonOutline label="Annuler" width="116px" />
    <button
      className="bg-custom-blue text-white font-bold py-2 px-4 rounded"
      style={{ height: '50px', width: '141px' }}
      onClick={handleSave}
    >
      Enregistrer
    </button>

    
           </div>
           </div>
        </div>

    );
}

export default EditContrat;