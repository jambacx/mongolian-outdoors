"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TestimonialData from "@/public/data/testimonial-data";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-4 section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span data-aos-duration="800" data-aos="fade-up">
              Our Testimonial
            </span>
            <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
              Real Feedback from Our Happy <br /> Travelers Worldwide
            </h2>
          </div>
          <p data-aos-duration="800" data-aos="fade-up" data-aos-delay="500">
            Our attraction passes save you more than buying
            <br /> individual tickets for your tour package system. Our
            <br /> attraction passes save you.
          </p>
        </div>
        <div className="testimonial-slider-4">
          <Swiper
            spaceBetween={30}
            speed={2000}
            loop={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".array-prev",
              prevEl: ".array-next",
            }}
            breakpoints={{
              991: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper-wrapper"
          >
            {TestimonialData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="testimonial-box-items-4">
                      {/* <div className="testi-img">
                        <Image src={item.author} alt="img" />
                      </div> */}
                      <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      {/* <div className="icon">
                        <Image src={item.quoteImg} alt="icon" />
                      </div> */}
                      <h3 className="pt-4">
                        <q>{item.quoteText}</q>
                      </h3>
                      <div className="client-info">
                        <h4>{item.name}</h4>
                        <span>
                          <b>from</b> {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
