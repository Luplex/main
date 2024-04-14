import React from "react";
import DeleteModal from "./DeleteModal.jsx";
import TableTeam from "./TableTeam.jsx";
import TableAccount from "../assets/TableAccount.json";
const MyTeam = () => {

    return (
        <div>
        <h1 className="text-2xl font-bold text-custom-grey mb-10">Mon équipe</h1>
        <div className="flex justify-between">
    <div className="text-left">
        <DeleteModal />
    </div>

    <div className="text-gray-900 text-base font-normal font-inter">6 collaborateurs</div>
</div>
<div className="mt-10">
<TableTeam data={TableAccount}/>
</div>

        </div>


    );

}

export default MyTeam;
