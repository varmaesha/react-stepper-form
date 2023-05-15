import React, { useState } from "react";
import "./header.css";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = () => setShowMenu(!showMenu);
  return (
    <header class="header">
      <div class="header__logo">
        <AiFillHome color="rgb(43, 124, 255)" size={25} />
        Cloudbankin
      </div>
      <div className="hamburger"><RxHamburgerMenu color="#000" size={25} /></div>
      <div class="header__profile">
        <div class="header__profile-dropdown">
          <button class="header__profile-button" onClick={menuToggle}>
            <AiOutlineUser />
          </button>
          <span className="nameText">Esha Varma</span>
          {showMenu && (
            <div class="header__profile-dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Log Out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
