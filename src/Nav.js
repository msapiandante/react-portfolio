import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation()
  console.log(location);
  return (
    <div>
      <ul className="nav justify-content-center">

      <li className="nav-item" >
          <Link to='/' className={location.pathname === "/" ? "clicked" : "unclicked"}>About</Link>
        </li>

        <li className="nav-item">
          <Link to='/Portfolio'className={location.pathname === "/Portfolio" ? "clicked" : "unclicked"}>Portfolio</Link>
        </li>
        
        <li className="nav-item">
         <Link to='/Resume'className={location.pathname === "/Resume" ? "clicked" : "unclicked"}>Resume</Link>
        </li>

        <li className="nav-item">
          <Link to='/Contact' className={location.pathname === "/Contact" ? "clicked" : "unclicked"}>Contact</Link>
        </li>

      </ul>

    </div>
  );
}

export default Nav;