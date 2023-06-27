/* eslint-disable react/jsx-no-target-blank */
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://i.ibb.co/whBLrs2/attractive-fitness-woman-performing-stretching-exercise-floor-23-2148038414.jpg"
                alt=""
              />
            </div>
            <h3>Yoga Meditation School</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/tusarallen/ombliss-yoga-client"
                className="btn"
                target="_blank"
              >
                Client
              </a>
              <a
                href="https://github.com/tusarallen/ombliss-yoga-server"
                className="btn"
                target="_blank"
              >
                Server
              </a>
              <a
                href="https://ombliss-yoga.web.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://i.ibb.co/w0gcrS2/man-helmet-with-number-3-it-1340-39432.jpg"
                alt=""
              />
            </div>
            <h3>ToyHub Marketplace</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/tusarallen/toyhub-client"
                className="btn"
                target="_blank"
              >
                Client
              </a>
              <a
                href="https://github.com/tusarallen/toyhub-server"
                className="btn"
                target="_blank"
              >
                Server
              </a>
              <a
                href="https://toyhub-project.web.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://i.ibb.co/FYDC2L1/frying-pan-empty-with-various-spices-black-table-1220-561.jpg"
                alt=""
              />
            </div>
            <h3>12 Tomatoes Restaurent</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/tusarallen/12-tomatoes-client"
                className="btn"
                target="_blank"
              >
                Client
              </a>
              <a
                href="https://github.com/tusarallen/12-tomatoes-server"
                className="btn"
                target="_blank"
              >
                Server
              </a>
              <a
                href="https://chef-recipe-hunter-with-auth.web.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://i.ibb.co/TtV5bkr/asian-young-main-group-hospital-professional-1291-37.jpg"
                alt=""
              />
            </div>
            <h3>Doctor Portals</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/tusarallen/hospital-auth-with-firebase"
                className="btn"
                target="_blank"
              >
                Client
              </a>
              <a
                href="https://github.com/tusarallen/hospital-auth-client"
                className="btn"
                target="_blank"
              >
                Server
              </a>
              <a
                href="https://hospital-auth-with-firebase.web.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://i.ibb.co/dfWD7rc/rpa-concept-with-blurry-hand-touching-screen-23-2149311914.jpg"
                alt=""
              />
            </div>
            <h3>AI Universal Hub</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/programming-hero-web-course2/b7a6-ai-universe-assignment-tusarallen"
                className="btn"
                target="_blank"
              >
                Client
              </a>
              <a
                href="https://github.com/programming-hero-web-course2/b7a6-ai-universe-assignment-tusarallen"
                className="btn"
                target="_blank"
              >
                Server
              </a>
              <a
                href="https://flourishing-cobbler-b3fa3c.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="https://i.ibb.co/rk8Qfgh/math-education-vector-pattern-with-handwritten-formulas-40453-3.jpg"
                alt=""
              />
            </div>
            <h3>Geometry Genius</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/programming-hero-web-course2/b7a5-geometry-genius-assignment-tusarallen"
                className="btn"
                target="_blank"
              >
                Client
              </a>
              <a
                href="https://github.com/programming-hero-web-course2/b7a5-geometry-genius-assignment-tusarallen"
                className="btn"
                target="_blank"
              >
                Server
              </a>
              <a
                href="https://fabulous-belekoy-6ed382.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
