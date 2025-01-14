import React from 'react';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <>
      <header>
        <div className={"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"}>
          <div className={"flex h-16 items-center pt-4"}>
            <div className={"md:flex md:items-center md:gap-12 mr-16"}>
              <a className={"block text-teal-600"}>
                <span className={"sr-only"}>Home</span>
                <img className={"h-12"} src={logo} alt="Logo" />
              </a>
            </div>
            <div className={"hidden md:block ms-12"}>
              <nav aria-label="Global">
                <ul className={"flex items-center gap-6 text-[#36CDCA] text-xl font-bold"}>
                  <li>
                    <a
                      className={"transition hover:text-gray-300/75"}
                      href="/"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      className={"transition hover:text-gray-300/75"}
                      href="/game"
                    >
                      Jouer
                    </a>
                  </li>
                  <li>
                    <a
                      className={"transition hover:text-gray-300/75"}
                      href="#"
                    >
                      Classement
                    </a>
                  </li>
                  <li>
                    <a
                      className={"transition hover:text-gray-300/75"}
                      href="#"
                    >
                      À Propos
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={"block md:hidden"}>
              <button className={"rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={"size-5"}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  
  )
}

export default Nav;
