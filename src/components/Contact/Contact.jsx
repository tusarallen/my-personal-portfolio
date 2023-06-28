/* eslint-disable react/jsx-no-target-blank */
import "./Contact.css";
import { IoMail } from "react-icons/io5";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <IoMail style={{ fontSize: "25px" }} />
              <h4>Email</h4>
              <h5>allentusar909@gmail.com</h5>
              <a href="mailto:allentusar909@gmail.com">Send a Message</a>
            </article>
            <article className="contact__option">
              <FaFacebookMessenger style={{ fontSize: "25px" }} />
              <h4>Messenger</h4>
              <h5>TU SH ER</h5>
              <a
                href="https://web.facebook.com/messages/t/100008829903217/"
                target="_blank"
              >
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <FaWhatsapp style={{ fontSize: "25px" }} />
              <h4>WhatsApp</h4>
              <h5>+01781607315</h5>
              <a
                href="https://web.whatsapp.com/send?phone=+01781607315"
                target="_blank"
              >
                Send a Message
              </a>
            </article>
          </div>
          {/* END OF CONTACT SECTION */}
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" rows="7" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
