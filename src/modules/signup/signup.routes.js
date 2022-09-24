import { Routes, Route, useLocation } from 'react-router-dom';
// import Signup from './components/demo-signup.component.js';
import Signup from './components/signup.component.js';


function LoginRoutes () {
    const { pathname } = useLocation();

    return (
        <Routes>
            <Route path={pathname} element={<Signup />} />
        </Routes>
    );
}

export default LoginRoutes;