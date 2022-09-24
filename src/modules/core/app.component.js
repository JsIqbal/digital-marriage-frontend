import React from "react";
import { Routes, Route  } from 'react-router-dom';

import { Signup, MoblieRegistration, Confirmation } from "../signup";

function App() {
    return (
      <div className="app">
         <div className="container">
            <Routes>
                <Route path="/registration" element={<Signup />} />

                <Route path="/user/mobile/registration" element={<MoblieRegistration />} />

                <Route path="/user/mobile/registration/welcome" element={<Confirmation />} />
            </Routes>
         </div>
      </div>
    );
}
 
export default App;