import React, { useState } from "react";
import Button from "./Button";
import { footer } from "../data/footer";
import logo from "../images/logo.svg";
import Menu from "./Menu";

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="absolute">
        <div>
          <img src={logo} alt="blogr logo" />
        </div>

        {/* Links data */}
        {isOpen && (
          <>
            <nav>
              <ul>
                {navLinks.map(({ id, title, links }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            </nav>
            <Button />
          </>
        )}

        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
