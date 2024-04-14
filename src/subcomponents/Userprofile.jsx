import React from 'react';
import profilepicture from '../assets/homme_1.png'; // Assurez-vous que le chemin est correct

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screens"> {/* Correction de h-screens à h-screen */}
      <div className="rounded-lg px-4 pt-4 flex items-center">
        <img className="h-10 w-10 rounded-full" src={profilepicture} alt="homme" />
        <div className="ml-4">
          <div className="text-lg font-medium">Daniel</div>
          <div className="text-sm text-gray-600">daniel@green.com</div>
          <div className="text-sm font-semibold text-custom-blue mt-1">Manager</div>
        </div>
      </div>

      {/* Barre horizontale */}
      {/* Barre horizontale ajustée */}
      <div className="w-full px-5"> {/* Ajustement pour correspondre à la largeur du texte */}
        <div className="border-t border-light-gray my-5"></div>
      </div>
      <div className="text-l font-medium text-custom-grey py-7 px-5">Green Conseil</div>


    </div>
  );
};

export default UserProfile;
