import { useState } from "react";
import "./Nav.css";
import {
  FaBook,
  FaEnvelopeOpenText,
  FaHeart,
  FaHome,
  FaUserAlt,
} from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome style={{ fontSize: "25px" }} />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt style={{ fontSize: "20px" }} />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook style={{ fontSize: "20px" }} />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FaHeart style={{ fontSize: "20px" }} />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FaEnvelopeOpenText style={{ fontSize: "20px" }} />
      </a>
    </nav>
  );
};

export default Nav;
