import React from "react";
import open from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";



const Menu = ({ isOpen, setIsOpen }) => {

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <img src={close} alt="close menu" /> : <img src={open} alt="open menu" />}
      </button>
    </>
  );
};

export default Menu;
