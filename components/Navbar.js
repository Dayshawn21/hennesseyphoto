import { useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

const Navbars = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <nav className="nav flex flex-wrap items-center justify-between px-4 py-2 bg-black text-white ">
        <div className="flex flex-no-shrink items-center py-1  text-grey-darkest">
          <Link href={`/`}>
            <a>
              <h1>Hennessey Photos </h1>
            </a>
          </Link>
        </div>
        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-3 relative select-none"
          for="menu-btn"
        >
          <span className="navicon bg-white flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link href="/about">
              <a className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                About
              </a>
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link href="/gallery">
              <a className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                Gallery
              </a>
            </Link>
          </li>
          {user ? (
            <>
              <li className="border-t md:border-none">
                <Link href="/account/login">
                  <a className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                    Your Photos
                  </a>
                </Link>
              </li>
              <li className="border-t md:border-none">
                <button
                  onClick={() => logout()}
                  className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker "
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="border-t md:border-none">
                <Link href="/account/login">
                  <a className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbars;
