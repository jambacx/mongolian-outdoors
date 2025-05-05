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
    <section className="hero-section hero-4 h-screen relative">
      {/* Navigation arrows with improved positioning and styling */}
      <div className="array-button absolute right-10 bottom-10 z-20 flex gap-3">
        <button className="array-prev bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all p-3 rounded-full">
          <i className="far fa-long-arrow-left text-white"></i>
        </button>
        <button className="array-next bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all p-3 rounded-full">
          <i className="far fa-long-arrow-right text-white"></i>
        </button>
      </div>

      <div className="swiper hero-slider h-screen w-full">
        <Swiper
          slidesPerView={1}
          speed={1500}
          loop={true}
          effect={"fade"}
          modules={[EffectFade, Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".array-next",
            prevEl: ".array-prev",
          }}
          className="swiper-wrapper h-full"
        >
          <SwiperSlide className="h-full">
            <div className="h-full w-full">
              <div className="hero-items h-full relative">
                <div className="plane-shape absolute top-1/4 left-10 opacity-80 animate-pulse">
                  <Image src={plane} alt="plane illustration" />
                </div>
                <div className="plane-shape-2 absolute bottom-1/4 right-10 opacity-80 animate-pulse">
                  <Image src={planeTwo} alt="plane illustration" />
                </div>
                <div
                  className="hero-bg bg-cover bg-center absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/hero/01.png)",
                  }}
                ></div>
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container relative z-10 h-full flex items-center">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="hero-content text-white">
                        <h6
                          className="text-xl mb-4 uppercase tracking-wider animate-fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="1.3s"
                        >
                          Discover Mongolia's Beauty
                        </h6>
                        <h1
                          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="1.5s"
                        >
                          <span className="shape-text relative inline-block">
                            Explore
                          </span>
                          <span> the wonders </span> <br /> of the world
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="h-full w-full">
              <div className="hero-items h-full relative">
                <div className="plane-shape absolute top-1/4 left-10 opacity-80 animate-pulse">
                  <Image src={plane} alt="plane illustration" />
                </div>
                <div className="plane-shape-2 absolute bottom-1/4 right-10 opacity-80 animate-pulse">
                  <Image src={planeTwo} alt="plane illustration" />
                </div>
                <div
                  className="hero-bg bg-cover bg-center absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/hero/02.jpg)",
                  }}
                ></div>
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container relative z-10 h-full flex items-center">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="hero-content text-white">
                        <h6
                          className="text-xl mb-4 uppercase tracking-wider animate-fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="1.3s"
                        >
                          Adventure Begins Here
                        </h6>
                        <h1
                          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="1.5s"
                        >
                          <span className="shape-text relative inline-block">
                            Mongolia
                          </span>
                          <span> is waiting </span> <br /> for you
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Booking form with improved positioning */}
      <div className="absolute bottom-0 left-0 right-0 z-10 transform translate-y-1/2">
        <div className="container">
          <div className="booking-list-area-1 bg-white rounded-lg shadow-xl flex flex-col md:flex-row">
            <div className="booking-list flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-3">
                <div className="icon flex-shrink-0">
                  <Image src={location} alt="location icon" />
                </div>
                <div className="content flex-grow">
                  {/* <h5 className="font-medium mb-2">Очих газар</h5> */}
                  <div className="form-clt w-full">
                    <div className="form">
                      <CountrySelect />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-list flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-3">
                <div className="icon flex-shrink-0">
                  <Image src={location} alt="icon" />
                </div>
                <div className="content flex-grow">
                  {/* <h5 className="font-medium mb-2">Үйл ажиллагаа</h5> */}
                  <div className="form-clt w-full">
                    <div className="form">
                      <ActivitySelect />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-list flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-3">
                <div className="icon flex-shrink-0">
                  <Image src={location} alt="icon" />
                </div>
                <div className="content flex-grow">
                  {/* <h5 className="font-medium mb-2">Явах огноо</h5> */}
                  <div className="form-clt w-full">
                    <div id="datepicker" className="input-group date">
                      <DatePick />
                      <span className="input-group-addon">
                        <i className="far fa-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-list flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-3">
                <div className="icon flex-shrink-0">
                  <Image src={location} alt="icon" />
                </div>
                <div className="content flex-grow">
                  {/* <h5 className="font-medium mb-2">Зочид</h5> */}
                  <div className="form-clt w-full">
                    <div className="form">
                      <GuestSelect />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="theme-btn flex-shrink-0 bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium py-4 px-8 flex items-center justify-center"
            >
              <span>
                Хайх <i className="far fa-search ml-2"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
