"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TestimonialData from "@/public/data/testimonial-data";
import one from "@/public/images/testimonial/client-top.png";
import two from "@/public/images/testimonial/testimonial-2.png";

const TestimonialTwo = () => {
  return (
    <section className="testimonial-section-5 fix section-bg-2 section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title style-2">
            <span data-aos-duration="800" data-aos="fade-up">
              Our Testimonial
            </span>
            <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
              Real Feedback from Our Happy
              <br /> Travelers Worldwide
            </h2>
          </div>
          <div className="test-left-top">
            <Image src={one} alt="img" />
            <div className="content">
              <h4>4.9/5 Rating</h4>
              <p>Clients praise our exceptional work.</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="testimonail-image-5">
              <Image src={two} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-slider-5">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                speed={2000}
                loop={true}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".dot11",
                  clickable: true,
                }}
                className="swiper-wrapper"
              >
                {TestimonialData.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="swiper-slide">
                        <div className="testimonial-box-items-4 box-shadow-none">
                          <div className="testi-img">
                            <Image src={item.author} alt={item.name} />
                          </div>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="icon">
                            <Image src={item.quoteImg} alt={item.name} />
                          </div>
                          <h3>
                            <q>{item.quoteText}</q>
                          </h3>
                          <div className="client-info">
                            <h4>{item.name}</h4>
                            <span>from {item.location}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="swiper-dot4 mt-4 text-center">
                <div className="dot11"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
