/* eslint-disable react/jsx-no-target-blank */
import { FaFacebookSquare, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* <a href="#" className="footer__logo">
          TUSHAR
        </a> */}
        <TypeAnimation
          className="footer__logo"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "AFZAL",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "HOSSAIN",
            1000,
            "TUSHAR",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "25px",
            display: "inline-block",
          }}
          repeat={10}
        />

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.facebook.com/profile.php?id=100008829903217"
            target="_blank"
          >
            <FaFacebookSquare style={{ fontSize: "25px" }} />
          </a>
          <a href="https://github.com/tusarallen" target="_blank">
            <FaGithub style={{ fontSize: "25px" }} />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank">
            <FaWhatsapp style={{ fontSize: "25px" }} />
          </a>
        </div>

        <div className="footer__copyright">
          <small>© Tushar 2023. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
