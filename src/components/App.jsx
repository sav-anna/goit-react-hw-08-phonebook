import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

import { RegisterPage } from '../Pages/RegisterPage';
import { LoginPage } from '../Pages/LoginPage';
import { ContactsPage } from '../Pages/ContactsPage';

import '../index.css';

export const App = () => {
  return (
    <div>
      <header className="header">
        <nav className="header__nav">
          <NavLink className="header__link" to="/register">
            Register
          </NavLink>
          <NavLink className="header__link" to="/login">
            Login
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
};
