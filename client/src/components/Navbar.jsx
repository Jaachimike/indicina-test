import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-blue-300">
      <div className=" max-w-7xl mx-auto flex justify-between py-5">
        <h1 className="font-bold">URL SHORTENER</h1>
        <nav className="w-2/5">
          <ul className="flex justify-around">
            <li>
              <Link to="/">Encode URL</Link>
            </li>
            <li>
              <Link to="/decode">Decode URL</Link>
            </li>
            <li>
              <Link to="/statistic">Statistics</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
