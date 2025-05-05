"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CountrySelect from "../select/CountrySelect";
import ActivitySelect from "../select/ActivitySelect";
import DatePick from "./DatePick";
import GuestSelect from "../select/GuestSelect";
import plane from "@/public/images/hero/new/plane-2.png";
import planeTwo from "@/public/images/hero/new/plane-3.png";
import location from "@/public/images/hero/location.png";

const Hero = () => {
  return (
    <section className="hero-section hero-4">
      <div className="array-button">
        <button className="array-prev">
          <i className="far fa-long-arrow-left"></i>
        </button>
        <button className="array-next">
          <i className="far fa-long-arrow-right"></i>
        </button>
      </div>

      <div className="swiper hero-slider">
        <Swiper
          slidesPerView={1}
          speed={3000}
          loop={true}
          effect={"fade"}
          modules={[EffectFade, Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="hero-items">
                <div className="plane-shape">
                  <Image src={plane} alt="img" />
                </div>
                <div className="plane-shape-2">
                  <Image src={planeTwo} alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: "url(/images/hero/01.png)",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Mongolian Outdoors{" "}
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          <span className="shape-text">Судла</span>
                          <span> Дэлхийн </span> <br /> өнцөг булан бүрийг
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="hero-items">
                <div className="plane-shape">
                  <Image src={plane} alt="img" />
                </div>
                <div className="plane-shape-2">
                  <Image src={planeTwo} alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: "url(/images/hero/02.jpg)",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Аялал & Жуулчлалын Агентлаг
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          <span className="shape-text">Судла</span>
                          <span> Дэлхийн </span> <br /> өнцөг булан бүрийг
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.7s">
                          Өндрийн төвшний үйлчилгээ, тав тухтай аяллын
                          хөтөлбөрийг санал болгож байна.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="booking-list-area-1">
          <div className="booking-list">
            <div className="icon">
              <Image src={location} alt="img" />
            </div>
            <div className="content">
              <h5>Очих газар</h5>
              <div className="form-clt">
                <div className="form">
                  <CountrySelect />
                </div>
              </div>
            </div>
          </div>
          <div className="booking-list">
            <div className="icon">
              <Image src={location} alt="img" />
            </div>
            <div className="content">
              <h5>Үйл ажиллагаа</h5>
              <div className="form-clt">
                <div className="form">
                  <ActivitySelect />
                </div>
              </div>
            </div>
          </div>
          <div className="booking-list">
            <div className="icon">
              <Image src={location} alt="img" />
            </div>
            <div className="content">
              <h5>Явах огноо</h5>
              <div className="form-clt">
                <div id="datepicker" className="input-group date">
                  <DatePick />
                  <span className="input-group-addon">
                    <i className="far fa-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-list">
            <div className="icon">
              <Image src={location} alt="img" />
            </div>
            <div className="content">
              <h5>Зочид</h5>
              <div className="form-clt">
                <div className="form">
                  <GuestSelect />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="theme-btn">
            <span>
              Хайх <i className="far fa-search"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
