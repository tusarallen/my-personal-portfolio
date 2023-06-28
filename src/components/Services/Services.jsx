import { FaCheck } from "react-icons/fa";
import "./Services.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container responsive">
          <article className="service" data-aos="fade-left" data-aos-delay="800">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <FaCheck className="service__list-icon" />
                <p>Intuitive designs and experiences.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Engaging UI, optimized interactions.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Simplified tasks, intuitive interfaces.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Iterative feedback, optimized usability.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Elegant UI/UX, creative blend.</p>
              </li>
            </ul>
          </article>
          {/* END OF UI/UX */}
          <article className="service" data-aos="fade-up" data-aos-delay="1200">
            <div className="service__head">
              <h3>web development</h3>
            </div>
            <ul className="service__list">
              <li>
                <FaCheck className="service__list-icon" />
                <p>Responsive web design.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Cross-browser compatibility ensured.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Full-stack development expertise.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Interactive JavaScript applications.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Modern HTML5 and CSS3.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Seamless API integrations.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Optimized website performance.</p>
              </li>
            </ul>
          </article>
          {/* CONTENT CREATION*/}
          <article className="service" data-aos="fade-right" data-aos-delay="800">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <FaCheck className="service__list-icon" />
                <p>Strategic content planning.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Engaging creative narratives.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Platform-specific content tailoring.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Persuasive copywriting skills.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Timely content calendar management.</p>
              </li>
              <li>
                <FaCheck className="service__list-icon" />
                <p>Data-driven performance analysis.</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION*/}
        </div>
      </section>
    </div>
  );
};

export default Services;
