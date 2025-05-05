"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import InstagramData from "@/public/data/instagram-data";

const InstagramSection = () => {
  return (
    <div className="instagram-section fix">
      <div className="instagram-slider">
        <Swiper
          spaceBetween={0}
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
            1399: {
              slidesPerView: 8,
            },
            1199: {
              slidesPerView: 6,
            },
            991: {
              slidesPerView: 5,
            },
            767: {
              slidesPerView: 4,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="swiper-wrapper"
        >
          {InstagramData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="instagram-image">
                  <Image src={item.image} alt={item.alternate} />
                  <Link href={`${item.destination}`} className="icon">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default InstagramSection;
