import React, { useEffect, useState } from "react";
import Button from "./Button";
import { footer } from "../data/footer";
import logo from "../images/logo.svg";
import Menu from "./Menu";
import arrowDark from "../images/icon-arrow-dark.svg";
import arrowLight from "../images/icon-arrow-light.svg";

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);
  const [activeNavLinks, setActiveNavLinks] = useState(null);

  const toogleInnerNavLinks = (id) => {
    setActiveNavLinks(activeNavLinks === id ? null : id);
  };

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
          <nav className="navbar text-center px-5 md:px-0 md:flex md:justify-between md:w-full md:p-10">
            <ul>
              {navLinks.map(({ id, title, links }) => (
                <li key={id} className="md:px-5 md:relative">
                  {title}
                  <button
                    onClick={() => toogleInnerNavLinks(id)}
                    className="p-2"
                  >
                    <picture>
                      <source media="(min-width: 768px)" srcset={arrowLight} />
                      <img
                        src={arrowDark}
                        className={
                          activeNavLinks === id ? "rotate-up" : "rotate-down"
                        }
                        alt=""
                      />
                    </picture>
                  </button>
                  {activeNavLinks === id ? (
                    <ul className="rounded-lg mt-5">
                      {links.map((link) => (
                        <li key={link}>{link}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <Button />
          </nav>
        )}

        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setActiveNavLinks={setActiveNavLinks}
        />
      </header>
    </>
  );
};

export default Header;
