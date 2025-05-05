"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import BrandData from "@/public/data/brand-data";

const BrandTwo = () => {
  return (
    <div className="brand-section fix section-padding pb-0">
      <div className="container">
        <div className="brand-slider">
          <Swiper
            spaceBetween={30}
            speed={2000}
            loop={true}
            roundLengths={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1399: {
                slidesPerView: 6,
              },
              1199: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper-wrapper"
          >
            {BrandData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="brand-img text-center">
                      <Image src={item.image} alt={item.alternate} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
