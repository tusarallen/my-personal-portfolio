/* eslint-disable react/no-unescaped-entities */
import Resume from "../../assets/Afzal-Hosaain-Tusar-Full_Stack_Developer.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
