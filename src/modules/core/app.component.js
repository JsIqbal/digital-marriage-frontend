import React from "react";
import { Routes, Route  } from 'react-router-dom';

import { Signup, MoblieRegistration, Confirmation, CreateProfile, SignUpClientRoutes } from "../signup";

import { Home, GeneralMarriage } from '../home';

function App() {
    return (
      <div className="app">
         <div className="container">
            <Routes>
                <Route path="/registration" element={<Signup />} />

                <Route path="/user/mobile/registration" element={<MoblieRegistration />} />

                <Route path="/user/mobile/registration/welcome" element={<Confirmation />} />

                <Route path="/user/mobile/registration/welcome/profile" element={<CreateProfile />} />

                <Route path="/user/home" element={<Home />} />
                <Route path="/user/home/general/marriage" element={<GeneralMarriage />} />
            </Routes>
         </div>
      </div>
    );
}
 
export default App;