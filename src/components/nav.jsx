import React from "react";
import logo from "../assets/logo.png";

function Nav() {
  const lastGameExist = localStorage.getItem('lastGameData') !== null;
  
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center pt-4">
          <div className="flex items-center gap-12 mr-16">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img className="h-12" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="block ms-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-[#36CDCA] text-xl font-bold">
                <li>
                  <a
                    className="transition hover:text-gray-300/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                {lastGameExist && (
                  <li>
                    <a
                      className="transition hover:text-gray-300/75"
                      href="/game"
                    >
                      Play
                    </a>
                  </li>
                )}
                <li>
                  <a
                    className="transition hover:text-gray-300/75"
                    href="#"
                  >
                    Rank
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
