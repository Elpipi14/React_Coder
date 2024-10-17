import { useState } from "react";
import logo from '../../assets/logo/variete.svg';
import { CartWidget } from "./CartWidget.jsx";
import subLogo from '../../assets/logo/Lv.png';
import users from '../../assets/logo/users.svg'

import SessionUser from '../Users/SessionUser.jsx';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  const [session, setSession] = useState(false);
  const toggleSession = () => setSession(true);

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <div className="relative flex  items-center grid-cols-2 lg:grid-cols-3">
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
               Nosotros
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contacto
              </a>
            </li>
          </ul>
          <a
            href="/"
            className="inline-flex items-center lg:mx-auto"
          >
            <img
              src={logo}
              alt="Logo"
              className="text-teal-accent-400 w-38 h-16 lg:relative lg:right-14"
            />
          </a>
          <ul className="items-center hidden space-x-8 relative left-16 lg:flex">
            <li>
              <button
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                onClick={toggleSession}
              >
               <img src={users} alt="users" className="ml-12" width={40}/>
              </button>
              {session && <SessionUser onClose={() => setSession(false)} />}
            </li>
            <li>
            <CartWidget />
            </li>
          </ul>

          <div className="ml-auto lg:hidden">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={toggleMenu}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-900 opacity-97 border rounded shadow-sm mt-24">
                  <div className="flex items-center justify-center mb-4">
                    <div className="ml-16">
                      <a
                        href="/"
                        className="inline-flex items-center"
                      >
                        <img
                          src={subLogo}
                          alt="Logo"
                          className="text-teal-accent-400 w-38"
                        />
                      </a>
                    </div>
                    <div className="relative left-6 bottom-10">
                      <button
                        className="pb-2 mt-8 pr-10 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={toggleMenu}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 flex flex-col text-center">
                      <li>
                        <a
                          href="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Sobre Nosotros
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                         Productos
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contacto
                        </a>
                      </li>
                      <li>
                        <button
                          className="mb-4 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={toggleSession}
                        >
                          Iniciar Sesion
                        </button>
                        {session && <SessionUser onClose={() => setSession(false)} />}
                      </li>
                      <li>
                        <CartWidget />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;