import React from "react";

const BECOMEPETSITTER_URL = `${process.env.NEXT_PUBLIC_BOARDING_PAGE_URL}becomePetSitter`;
const SIGNUP_URL = `${process.env.NEXT_PUBLIC_BOARDING_PAGE_URL}register`;
const LOGIN_URL = `${process.env.NEXT_PUBLIC_BOARDING_PAGE_URL}login`;
const ADMIN_URL = `${process.env.NEXT_PUBLIC_BOARDING_PAGE_URL}adminPage`;
//responsive: drawer
const Navbar = () => {
  return (
    <div className="navbar bg-primary-100">
      <div className="flex-4 md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href={BECOMEPETSITTER_URL} target="_blank" rel="noopener noreferrer">
                Become a sitter
              </a>
            </li>
            <li>
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                Sign up
              </a>
            </li>
            <li>
              <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </li>
            <li>
              <a href={ADMIN_URL} target="_blank" rel="noopener noreferrer">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex-1">
        <a className="btn btn-ghost normal-case text-3xl text-white">PetNanny</a>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="btn normal-case text-lg text-primary-100 bg-white border-none"
              href={BECOMEPETSITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a sitter
            </a>
          </li>
          <li>
            <a
              className="btn btn-ghost normal-case text-lg text-white"
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </a>
          </li>
          <li>
            <a
              className="btn btn-ghost normal-case text-lg text-white"
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
            </a>
          </li>
          <li>
            <a
              className="btn btn-ghost normal-case text-lg text-white"
              href={ADMIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
