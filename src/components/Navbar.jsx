import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/imrsiv.png';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const linkBaseClasses =
    'block py-2 px-3 md:p-0 border-b-2 border-transparent rounded-sm transition-all duration-300 ease-in-out';

  const getLinkClasses = (path) =>
    location.pathname === path
      ? `${linkBaseClasses} text-fuchsia-600 border-fuchsia-600 font-semibold`
      : `${linkBaseClasses} text-black hover:text-fuchsia-600 hover:border-fuchsia-600`;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="IMRSIV Logo" />
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-fuchsia-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-fuchsia-600 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white rtl:space-x-reverse">
            <li>
              <Link to="/" className={getLinkClasses('/')} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={getLinkClasses('/services')} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/JoinOurTeam" className={getLinkClasses('/JoinOurTeam')} onClick={closeMenu}>
                Join our Team
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className={getLinkClasses('/ContactUs')} onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
