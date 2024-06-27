import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login/login';
import { Register } from '../pages/Register/Register';
const AuthenticatedRoutes = () => (
  <Routes>

    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
  </Routes>
);

export default AuthenticatedRoutes;