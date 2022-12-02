import React, { useEffect, useState } from "react";
import { BiMenu, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

import LogoBatateam from '../../assets/logo-batateam-expand.png';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        {/* <Link to="/home" className="header__content__img">
          <img className="header__content__img" src={LogoBatateam} alt="Logo Batateam" />
        </Link> */}
        <nav
          className={`${"header__content__nav"} 
            ${menuOpen && size.width < 780 ? `${"isMenu"}` : ""}
          `}
        >
          <ul>
            <li>
              <Link to="/explanation">Tela de Explicação</Link>
            </li>
            <li>
              <a href="#trilhas">Trilhas</a>
            </li>
            <li>
              <a href="#disciplinas">Disciplinas</a>
            </li>
            <li>
              <Link to="/survey">Teste de afinidade</Link>
            </li>
            <li>
              <Link to="/help">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
        <input className="input-field" type="search" aria-label="Search">
            {/* <div className="input-icon">
              <BiSearchAlt2/> 
            </div> */}
        </input>
      </div>
    </header>
  )
};

export default Navbar;