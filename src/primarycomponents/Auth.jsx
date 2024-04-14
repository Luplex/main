import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { ToastProvider, ToastContainer } from '../components/ToastContext'; // Assurez-vous que ce chemin est correct
import GuideSign from '../components/GuideSign';

const Auth = ({ onLoginSuccess }) => {
  return (
    <ToastProvider>
    <div className='bg-back-gray'>
    <div className="flex justify-center items-center h-screen">
      <Routes>
        <Route path="/" element={<Signin onLoginSuccess={onLoginSuccess} />} />
        <Route path="/signup" element={<Signup onSignupSuccess={onLoginSuccess} />} />
        <Route path="/guideSign" element={<GuideSign onLoginSuccess={onLoginSuccess} />} />
        {/* Redirection si une autre route est tapée */}
        <Route path="*" element={<Signin onLoginSuccess={onLoginSuccess} />} />
      </Routes>
    </div>
    </div>
    </ToastProvider>
  );
};

export default Auth;
