import React from "react";

//responsive: drawer
const Navbar = () => {
  return (
    <div className="navbar bg-primary-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl text-white">PetNanny</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="btn normal-case text-lg text-primary-100 bg-white border-none">
              Become a sitter
            </a>
          </li>
          <li>
            <a className="btn btn-ghost normal-case text-lg text-white">Sign up</a>
          </li>
          <li>
            <a className="btn btn-ghost normal-case text-lg text-white">Log in</a>
          </li>
          <li>
            <a className="btn btn-ghost normal-case text-lg text-white">Admin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
