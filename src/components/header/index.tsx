import React, { useEffect, useState } from "react";
import { BiMenu, BiSearchAlt2 } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

import Logo from '../../assets/azimute-logo.png';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [trailsOpen, setTrailsOpen] = useState<boolean>(false);
  const [coursesOpen, setCoursesOpen] = useState<boolean>(false);
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
    <header className="header" style={{zIndex: 2}}>
      <div className="header__content">
        <Link to="/home" className="header__content__img">
          <img className="header__content__img" src={Logo} alt="Logo Batateam" />
        </Link>
        <nav
          className={`${"header__content__nav"} 
            ${menuOpen && size.width < 780 ? `${"isMenu"}` : ""}
          `}
        >
          <ul>
            {/* <li>
              <Link to="/home">Home</Link>
            </li> */}
            <li>
              <a href="/home#trilhas">Trilhas</a> { menuOpen ? 
              trailsOpen ? 
                <FiChevronUp size={30} onClick={() => setTrailsOpen(false)}/> : 
                <FiChevronDown size={30} onClick={() => setTrailsOpen(true)}/> 
              : null }
            </li>
            {trailsOpen &&
                <>
                  <li className="li-modal"><a href="/audiovisual">Animação/Audiovisual</a></li>
                  <li className="li-modal"><a href="/design">Design Interativo</a></li>
                  <li className="li-modal"><a href="/jogos">Jogos Digitais</a></li>
                  <li className="li-modal"><a href="/sistemas">Sistemas Multimídias</a></li>
                </>
              }
            <li>
              <a href="/home#disciplinas">Disciplinas</a> { menuOpen ? 
              coursesOpen ? 
                <FiChevronUp size={30} onClick={() => setCoursesOpen(false)}/> : 
                <FiChevronDown size={30} onClick={() => setCoursesOpen(true)}/> 
              : null }
            </li>
            {coursesOpen &&
                <>
                  <li className="li-modal"><a href='/obrigatórias'>Obrigatórias</a></li>
                  <li className="li-modal"><a href='/eletivas'>Eletivas</a></li>
                  <li className="li-modal"><a href="/optativas">Optativas</a></li>
                </>
              }
            <li>
              <Link to="/survey">Teste de afinidade</Link>
            </li>
            <li>
              <Link to="/planner">Planejamento</Link>
            </li>
            <li>
              <Link to="/help">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenu color={"#425968"}onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
        {/* <input className="input-field" type="search" aria-label="Search"> */}
            {/* <div className="input-icon">
              <BiSearchAlt2/> 
            </div> */}
        {/* </input> */}
      </div>
    </header>
  )
};

export default Navbar;