import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/encode">Encode URL</a>
          </li>
          <li>
            <a href="/decode">Decode URL</a>
          </li>
          <li>
            <a href="/statistics">Statistics</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
