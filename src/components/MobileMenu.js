import React from "react";

import { IoCloseOutline } from "react-icons/io5";

import "./MobileMenu.css";

function MobileMenu({ menu, menuToggler }) {
  return (
    <div className={`mobile-menu-container ${menu ? "shown" : "hidden"}`}>
      <IoCloseOutline onClick={menuToggler}/>
      <nav>
        <ul className="nav-mobile-list">
            <li><h2>Курсы</h2></li>
            <li><h2>О нас</h2></li>
            <li><h2>Контакты</h2></li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
