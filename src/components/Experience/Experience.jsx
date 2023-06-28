import { FaCheckCircle } from "react-icons/fa";
import "./Experience.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container responsive">
          <div data-aos="fade-right" data-aos-delay="1200" className="experience__fronted">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          {/* END OF FRONTEND */}
          <div data-aos="fade-left" data-aos-delay="1200" className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Express JS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Mongoose</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
