import { Routes, Route, useLocation } from 'react-router-dom';
// import Signup from './components/demo-signup.component.js';
import Signup from './components/signup.component.js';
import MoblieRegistration from './user-mobile-registration-components/confirmation.component.js';

function SignUpRoutes () {
    const { pathname } = useLocation();

    return (
        <Routes>
            <Route path={pathname} element={<Signup />} />
            <Route path={pathname} element={<MoblieRegistration />} />
            <Route path={pathname} element={<confirm />} />
        </Routes>
    );
}

export default SignUpRoutes;