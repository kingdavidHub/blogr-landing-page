import React, { useEffect, useState } from "react";
import Button from "./Button";
import { footer } from "../data/footer";
import logo from "../images/logo.svg";
import Menu from "./Menu";

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);


  useEffect(() => {
    window.innerWidth > width ? setIsOpen(true) : null;

  }, []);

  return (
    <>
      <header className="absolute p-5 flex justify-between items-center w-full">
        <div>
          <img src={logo} alt="blogr logo" />
        </div>

        {/* Links data */}
        {isOpen && (
          <nav className="navbar md:flex md:justify-between">
            <ul>
              {navLinks.map(({ id, title, links }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
            <Button />
          </nav>
        )}

        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
