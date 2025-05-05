"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import HotDealsData from "@/public/data/hot-deals";

const HotDeals = () => {
  return (
    <section className="tour-section-5 section-bg-2 fix">
      <div
        className="tour-wrapper-5 section-padding bg-cover"
        style={{
          backgroundImage: "url(/images/tour/new/bg.jpg)",
        }}
      >
        <div className="container">
          <div className="section-title style-2 text-center">
            <span
              className="text-white"
              data-aos-duration="800"
              data-aos="fade-up"
            >
              Discover Weekly Travelling
            </span>
            <h2
              className="text-white "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Hot deals on select <br /> expedition departures
            </h2>
          </div>
        </div>
        <div className="tour-slider-5">
          <Swiper
            spaceBetween={30}
            speed={2000}
            loop={true}
            roundLengths={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".dot1",
              clickable: true,
            }}
            breakpoints={{
              1599: {
                slidesPerView: 6,
              },
              1399: {
                slidesPerView: 5,
              },
              1199: {
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper-wrapper"
          >
            {HotDealsData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="tour-box-items-6">
                    <div className="tour-image">
                      <Image src={item.image} alt={item.title} />
                      <div className="star">
                        <Link href="/">
                          <i className="fas fa-star"></i>
                        </Link>
                        <Link href="/">
                          <i className="fas fa-star"></i>
                        </Link>
                        <Link href="/">
                          <i className="fas fa-star"></i>
                        </Link>
                        <Link href="/">
                          <i className="fas fa-star"></i>
                        </Link>
                        <Link href="/">
                          <i className="far fa-star"></i>
                        </Link>
                        <span>({item.review})</span>
                      </div>
                    </div>
                    <div className="tour-content">
                      <h6>
                        From <span>${item.price}</span>{" "}
                        <del>${item.discount}</del>
                      </h6>
                      <h5>
                        <Link href={`${item.destination}`}>{item.title}</Link>
                      </h5>
                      <ul>
                        <li>
                          <i className="far fa-map-marker-alt"></i>
                          {item.location}
                        </li>
                        <li>
                          <i className="far fa-calendar"></i>
                          {item.day} Days / {item.night} Night
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-dot4 mt-5 text-center">
          <div className="dot1"></div>
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
