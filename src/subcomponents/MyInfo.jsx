import React from "react";
import TextInput from "../subcomponents/TextInput.jsx";
import DropdownComponent from '../subcomponents/DropdownComponent.jsx';
const MyInfo = () => {
    const dropdownOptions = [
        { label: 'Collaborateur', href: '#' }
    ];


    return (
        <div>
            <h1 className="text-2xl font-bold text-custom-grey mb-10">Mes informations</h1>
            <div className="flex items-start justify-between">
                <div className="flex flex-col space-y-4">
                    <TextInput label="ID Membre" placeholder="132143" labelFontSize="text-lg" locked={true} width="330px"/>
                    <TextInput label="Adresse email" placeholder="daniel@green.com" labelFontSize="text-lg" locked={true} width="330px"/>
                </div>
                <div className="flex flex-col space-y-4">
                    {/* TextInput déjà rempli et modifiable */}
                    <TextInput 
                        label="Prénom" 
                        value="Daniel" // Valeur initiale
                        onChange={(e) => {/* logic for handling change */}} // Gérer le changement
                        labelFontSize="text-lg" 
                        locked={false} // Assurez-vous que c'est modifiable
                        width="330px"
                    />
                    {/* Dropdown avec un style similaire */}
                    <div>
                        <label className="mb-2 text-lg font-medium 'text-dark-grey" style={{ height: '28px' }}>Rôle</label>
                            <div className="mt-2">
                                 <DropdownComponent label="Manager"  options={dropdownOptions} />
                            </div>
                    </div>

                </div>
                    <TextInput 
                        label="Nom" 
                        value="Dupont" // Valeur initiale
                        onChange={(e) => {/* logic for handling change */}} // Gérer le changement
                        labelFontSize="text-lg" 
                        locked={false} // Assurez-vous que c'est modifiable
                        width="330px"
                    />
            </div>
        </div>
    );
};

export default MyInfo;
