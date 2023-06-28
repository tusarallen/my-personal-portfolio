/* eslint-disable react/no-unescaped-entities */
import "./Testimonialss.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const array = [
  {
    avatar: "https://i.ibb.co/v3qRKD0/avatar1.jpg",
    name: "Elle Fanning",
    review:
      "Impressed by Tushar's ability to transform my vision into reality. Their exceptional communication and expertise resultedin stunning outcomes. Highly recommended for exceptional creativity and professionalism!",
  },
  {
    avatar: "https://i.ibb.co/3vsYzTz/avatar3.jpg",
    name: "Hamid Yaddani",
    review:
      "Efficient, responsive, and talented— Tushar made working together a breeze. They brought a fresh perspective to my project, exceeding expectations. Highly recommended for outstanding results and performance!",
  },
  {
    avatar: "https://i.ibb.co/VjwyzLH/avatar4.jpg",
    name: "Ena Maxwell",
    review:
      "Tushar is a master in their field! Professional, reliable, and a pleasure to work with. They understood my requirements perfectly, delivering exceptional outcomes. Highly recommended for outstanding services.!",
  },
  {
    avatar: "https://i.ibb.co/XbDSdkW/avatar2.jpg",
    name: "John Fibonki",
    review:
      "Satisfaction guaranteed with Tushar's flawless work. They captured my brand essence perfectly, delivering outstanding creativity within the agreed timeline. Highly endorsed for exceptional results and qualityfull productvity.!",
  },
];

const Testimonialss = () => {
  return (
    <div>
      <section id="testimonials">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {array.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="bejal">
                <article className="testimonial">
                  <div className="client__avater">
                    <img src={avatar} alt="Avater" />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonialss;
