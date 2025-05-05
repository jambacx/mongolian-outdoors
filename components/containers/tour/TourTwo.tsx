"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import TourTwoData from "@/public/data/tour-data-two";
import Pagination from "../blog/Pagination";
import YoutubeEmbed from "@/components/layout/YoutubeEmbed";

const TourTwo = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const [imageDimensions, setImageDimensions] = useState<
    Record<number, { width: number; height: number }>
  >({});

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".amz-wrap",
      children: ".img-popup",
      mouseMovePan: true,
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  useEffect(() => {
    TourTwoData.forEach((item) => {
      const img = new window.Image();
      img.src = item.image.src;
      img.onload = () => {
        setImageDimensions((prev) => ({
          ...prev,
          [item.id]: { width: img.width, height: img.height },
        }));
      };
    });
  }, []);

  return (
    <>
      <section className="amazing-tour-section section-padding fix">
        <div className="container">
          <div className="amazing-tour-wrapper amz-wrap">
            <div className="row g-4">
              {TourTwoData.map((item) => {
                return (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                    key={item.id}
                  >
                    <div className="amazing-tour-items mt-0 van-tilt">
                      <div className="thumb">
                        <div className="post-box">
                          <h4>${item.price}</h4>
                          <span>/ person</span>
                        </div>
                        <Image src={item.image} alt={item.title} />
                        <div className="list-items">
                          <h6>{item.tag}</h6>
                          <ul className="popup-icon">
                            <li>
                              <button
                                className="video-buttton video-popup"
                                onClick={() => setActiveVideoId(item.video)}
                              >
                                <i className="far fa-video"></i>
                              </button>
                            </li>
                            <li>
                              <a
                                href={item.image.src}
                                className="img-popup"
                                data-pswp-width={
                                  imageDimensions[item.id]?.width || 260
                                }
                                data-pswp-height={
                                  imageDimensions[item.id]?.height || 260
                                }
                                data-pswp-src={item.image.src}
                              >
                                <i className="far fa-camera"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="content">
                        <h4>
                          <Link href={`${item.destination}`}>{item.title}</Link>
                        </h4>
                        <span className="location-icon">
                          <i className="far fa-map-marker-alt"></i>
                          {item.location}
                        </span>
                        <Link
                          href={`${item.destination}`}
                          className="theme-btn"
                        >
                          <span>Book Now</span>{" "}
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="page-nav-wrap mt-5 text-center "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <div
        className={(activeVideoId ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setActiveVideoId(null)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {activeVideoId && <YoutubeEmbed embedId={activeVideoId} />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setActiveVideoId(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourTwo;
