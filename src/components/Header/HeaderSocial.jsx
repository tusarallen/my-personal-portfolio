/* eslint-disable react/jsx-no-target-blank */
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/afzal-hossain-tusar-365593278/"
        target={"_blank"}
      >
        <FaLinkedin style={{fontSize:"25px"}} />
      </a>
      <a href="https://github.com/tusarallen" target={"_blank"}>
        <FaGithub style={{fontSize:"25px"}}  />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100008829903217"
        target={"_blank"}
      >
        <FaFacebookSquare style={{fontSize:"25px"}}  />
      </a>
    </div>
  );
};

export default HeaderSocial;
