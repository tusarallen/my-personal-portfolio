import { FaCheckCircle } from "react-icons/fa";
import './Experience.css';

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__fronted">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle />
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <FaCheckCircle />
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <FaCheckCircle />
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <FaCheckCircle />
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience__details">
                <FaCheckCircle />
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
          </div>
          {/* END OF FRONTEND */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle />
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience__details">
                <FaCheckCircle />
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience__details">
                <FaCheckCircle />
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <FaCheckCircle />
                <h4>Mongoose</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
