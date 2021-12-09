import React, { useState } from "react";
import { ReactComponent as LogoSvg } from "../assets/shared/logo.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import CloseIcon from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNavIcon, setMobileNavIcon] = useState(HamburgerIcon);

  const toggleMobileNav = () => {
    let mobileNav = document.querySelector("ul");
    mobileNav.classList.toggle("active");
    mobileNav.classList.contains("active")
      ? setMobileNavIcon(CloseIcon)
      : setMobileNavIcon(HamburgerIcon);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <LogoSvg />
        </Link>
        <ul>
          <li>
            <Link to="/">
              <span> 00 </span>home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span> 01 </span>destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span> 02 </span>crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span> 03 </span>technology
            </Link>
          </li>
        </ul>
        <button>
          <img
            onClick={toggleMobileNav}
            src={mobileNavIcon}
            alt="mobileNavIcon"
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
