import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./primarycomponents/Auth";
import MainApp from "./primarycomponents/MainApp";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Vérifiez si l'utilisateur est connecté au démarrage de l'application
        const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        sessionStorage.setItem("isLoggedIn", "true"); // Marquez l'utilisateur comme connecté dans le localStorage
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem("isLoggedIn"); // Supprimez l'indicateur de connexion du localStorage
    };

    return (
        // <div style={{ width: '1168px', height: '398px', padding: '20px', boxSizing: 'border-box', background: '#FFF', borderRadius: '8px' }}>
        //   <LineChartComponent data={sampleData} />
        // </div>

        <Router>
            < ScrollToTop />
            <div className="app min-h-screen">
                <Routes>
                    {isLoggedIn ? (
                        // Passer handleLogout en prop pour permettre la déconnexion
                        <Route path="/*" element={<MainApp onLogout={handleLogout} />} />
                    ) : (
                        <Route path="/*" element={<Auth onLoginSuccess={handleLoginSuccess} />} />
                    )}
                </Routes>
            </div>
            
        </Router>
    );
}

export default App;
