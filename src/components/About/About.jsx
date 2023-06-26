/* eslint-disable react/no-unescaped-entities */
import { FaAward, FaFolderOpen, FaUserFriends } from "react-icons/fa";
import tusar from "../../assets/26.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={tusar} alt="about image" />
            </div>
          </div>
          <div className="about__content">
            <div className="custom">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>1+ Years Working</small>
                </article>
              </div>
              <div className="about__cards">
                <article className="about__card">
                  <FaUserFriends className="about__icon" />
                  <h5>Clients</h5>
                  <small>50+ Worldwide</small>
                </article>
              </div>
              <div className="about__cards">
                <article className="about__card">
                  <FaFolderOpen className="about__icon" />
                  <h5>Projects</h5>
                  <small>45+ Complete</small>
                </article>
              </div>
            </div>
            <p>
              My name is Tushar, a mathematics student with a strong interest in
              technolgy. I excel in HTML, CSS, JavaScript, React and MongoDB.
              Seeking a web developer role, i am dedicated to delivering high productivity and quality work...
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
