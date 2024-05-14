import React from "react";
import open from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";



const Menu = ({ isOpen, setIsOpen, setActiveNavLinks }) => {

  return (
    <>
      <button onClick={() => {
        setIsOpen(!isOpen)
        setActiveNavLinks(null);
      }} className="md:hidden">
        {isOpen ? <img src={close} className="rotate-up" alt="close menu" /> : <img src={open} className="rotate-down" alt="open menu" />}
      </button>
    </>
  );
};

export default Menu;
