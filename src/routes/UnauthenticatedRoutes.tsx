import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login/login';
import { Register } from '../pages/Register/Register';

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
  </Routes>
);

export default UnauthenticatedRoutes;
