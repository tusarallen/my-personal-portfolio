import "../Header/Header.css";
import Cta from "./Cta";
import Tushar from "../../assets/tushar.png";
import HeaderSocial from "./HeaderSocial";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Tushar</h1>
        {/* <h5 className="text-light">Fullstack Developer</h5> */}
        <TypeAnimation
          className="text-light"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Junior Web developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Junior ReactJS developer",
            1000,
            "Junior Fullstack developer",
            1000,
            "Junior Mern developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "25px",
            display: "inline-block",
          }}
          repeat={Infinity}
        />
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={Tushar} alt="Tushar" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
