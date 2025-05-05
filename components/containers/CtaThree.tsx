"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import YoutubeEmbed from "../layout/YoutubeEmbed";
import circleOne from "@/public/images/tour/circle.png";
import circleTwo from "@/public/images/tour/circle2.png";
import circleThree from "@/public/images/tour/circle3.png";
import shapeOne from "@/public/images/tour/shape1.png";
import shapeTwo from "@/public/images/tour/shape2.png";
import shapeThree from "@/public/images/tour/shape3.png";

const CtaThree = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <div
        className="vedio-area pt-0 fix bg-cover"
        style={{
          backgroundImage: "url(/images/video-bg.jpg)",
        }}
      >
        <div className="play-btn">
          <a
            className="video-btn video-popup"
            onClick={() => setVideoActive(true)}
          >
            <i className="fas fa-play"></i>
          </a>
        </div>
        <div className="tour-section2 pt-0 fix">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="tour-main-item">
                  <div
                    className="tour-box-items-3 bg-cover"
                    style={{
                      backgroundImage: "url(/images/tour/26.jpg)",
                    }}
                  >
                    <div className="tour-content">
                      <h3>
                        Save & <br /> explore global <br />
                        destinations!
                      </h3>
                      <Link href="/destination-details" className="theme-btn">
                        <span>Book Now</span>{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="percent-image">
                      <Image src={circleOne} alt="img" />
                    </div>
                  </div>
                  <div className="shape">
                    <Image src={shapeOne} alt="img" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="tour-main-item">
                  <div
                    className="tour-box-items-3 style-2 bg-cover"
                    style={{
                      backgroundImage: "url(/images/tour/27.jpg)",
                    }}
                  >
                    <div className="tour-content">
                      <h3>
                        Plan Ahead & <br />
                        Save Big on <br />
                        Vacation
                      </h3>
                      <Link href="/destination-details" className="theme-btn">
                        <span>Book Now</span>{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="percent-image">
                      <Image src={circleTwo} alt="img" />
                    </div>
                  </div>
                  <div className="shape">
                    <Image src={shapeTwo} alt="img" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="tour-main-item">
                  <div
                    className="tour-box-items-3 style-3 bg-cover"
                    style={{
                      backgroundImage: "url(/images/tour/28.jpg)",
                    }}
                  >
                    <div className="tour-content">
                      <h3>
                        Book Now and <br />
                        Enjoy Amazing <br />
                        Savings!
                      </h3>
                      <Link href="/destination-details" className="theme-btn">
                        <span>Book Now</span>{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="percent-image">
                      <Image src={circleThree} alt="img" />
                    </div>
                  </div>
                  <div className="shape">
                    <Image src={shapeThree} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {videoActive && <YoutubeEmbed embedId="Cn4G2lZ_g2I" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaThree;
