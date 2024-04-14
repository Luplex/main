import React, { useState } from "react";
import { ToastProvider, ToastContainer } from "../components/ToastContext"; // Assurez-vous que ce chemin est correct
// Autres imports...
import Sidebar from "../components/Sidebar.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Contrats from "../components/Contrats.jsx";
import VueContrat from "../components/VueContrat.jsx";
import Affaires from "../components/Affaires.jsx";
import VueAffaire from "../components/VueAffaire.jsx";
import ComparerAffaires from "../components/ComparerAffaires.jsx";
import ComparerContrats from "../components/ComparerContrats.jsx";
import Fournisseurs from "../components/Fournisseurs.jsx";
import VueFournisseur from "../components/VueFournisseur.jsx";
import EditFournisseur from "../components/EditFournisseur.jsx";
import VueCollaborateur from "../components/VueCollaborateur.jsx";
import Account from "../components/Account.jsx";
import Critere from "../components/Critere.jsx";
import EditContrat from "../components/EditContrat.jsx";
import EditAffaires from "../components/EditAffaires.jsx";
import { Routes, Route } from "react-router-dom";
import Guide from "../components/Guide.jsx";
const MainApp = ({ onLogout }) => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <ToastProvider>
            {" "}
            {/* Englobe tout le contenu avec ToastProvider */}
            <div className="flex">
                <Sidebar activePage={activePage} setActivePage={setActivePage} onLogout={onLogout} />
                <div className="flex-grow" style={{ marginLeft: "16rem" }}>
                    <ToastContainer />{" "}
                    {/* Positionnez le ToastContainer ici pour qu'il soit visible sur toutes les pages */}
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/contrats" element={<Contrats />} />
                        <Route path="/contrats/comparer" element={<ComparerContrats />} />
                        <Route path="/affaires" element={<Affaires />} />
                        <Route path="/affaires/1" element={<VueAffaire />} />
                        <Route path="/affaires/comparer" element={<ComparerAffaires />} />
                        <Route path="/contrats/1" element={<VueContrat />} />
                        <Route path="/contrats/1/edit" element={<EditContrat />} />
                        <Route path="/affaires/1/edit" element={<EditAffaires />} />
                        <Route path="/fournisseurs" element={<Fournisseurs />} />
                        <Route path="/fournisseurs/1/edit" element={<EditFournisseur />} />
                        <Route path="/fournisseurs/1" element={<VueFournisseur />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/guide" element={<Guide />} />
                        <Route path="/account/vue-collaborateur" element={<VueCollaborateur />} />
                        <Route path="/criteres" element={<Critere />} />
                        {/* Ajoutez d'autres routes ici si nécessaire */}
                    </Routes>
                </div>
            </div>
        </ToastProvider>
    );
};

export default MainApp;
