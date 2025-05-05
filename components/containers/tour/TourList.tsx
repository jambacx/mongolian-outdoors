"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import TourTwoData from "@/public/data/tour-data-two";
import Pagination from "../blog/Pagination";
import YoutubeEmbed from "@/components/layout/YoutubeEmbed";
import location from "@/public/images/hero/location.png";
import DatePick from "@/components/layout/banner/DatePick";
import CountrySelect from "@/components/layout/select/CountrySelect";
import ActivitySelect from "@/components/layout/select/ActivitySelect";
import GuestSelect from "@/components/layout/select/GuestSelect";

const TourList = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const [minValue, setMinValue] = useState(130);
  const [maxValue, setMaxValue] = useState(250);
  const minLimit = 130;
  const maxLimit = 500;

  useEffect(() => {
    if (minValue > maxValue) {
      setMinValue(maxValue);
    }
  }, [minValue, maxValue]);

  const getSliderBackground = () => {
    const minPercent = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
    const maxPercent = ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;

    return `linear-gradient(to right, #000 ${minPercent}%, #4D40CA ${minPercent}%, #4D40CA ${maxPercent}%, #000 ${maxPercent}%)`;
  };

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
      <section className="amazing-tour-section section-padding">
        <div className="container">
          <div className="amazing-tour-wrapper amz-wrap">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4">
                <div className="tour-sidebar-area sticky-style">
                  <div className="tour-destination-sidebar">
                    <div className="booking-list-area">
                      <div className="booking-list">
                        <div className="icon">
                          <Image src={location} alt="img" />
                        </div>
                        <div className="content">
                          <h5>Destination</h5>
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
                          <h5>All Activity</h5>
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
                          <h5>Departure Date</h5>
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
                      <div className="booking-list style-2">
                        <div className="icon">
                          <Image src={location} alt="img" />
                        </div>
                        <div className="content">
                          <h5>Guest</h5>
                          <div className="form-clt">
                            <div className="form">
                              <GuestSelect />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tour-sidebar-widget">
                        <div className="wid-title">
                          <h3>Filter by Price</h3>
                        </div>
                        <div className="price-range-wrapper">
                          <div className="slider-container">
                            <input
                              type="range"
                              className="slider"
                              min={minLimit}
                              max={maxLimit}
                              value={minValue}
                              onChange={(e) =>
                                setMinValue(parseInt(e.target.value))
                              }
                              style={{ background: getSliderBackground() }}
                            />
                            <input
                              type="range"
                              className="slider"
                              min={minLimit}
                              max={maxLimit}
                              value={maxValue}
                              onChange={(e) =>
                                setMaxValue(parseInt(e.target.value))
                              }
                              style={{ background: getSliderBackground() }}
                            />
                          </div>
                          <div className="price-text pt-4 d-flex gap-3">
                            <label htmlFor="amount">Price:</label>
                            <input
                              type="text"
                              id="amount"
                              readOnly
                              style={{ border: "0px" }}
                              value={`$${minValue} - $${maxValue}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="tour-sidebar-widget">
                        <div className="wid-title">
                          <h3>Languages</h3>
                        </div>
                        <ul className="languages-list">
                          <li>
                            <label className="checkbox-single">
                              <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                <span className="checkbox-area d-center">
                                  <input type="checkbox" />
                                  <span className="checkmark d-center"></span>
                                </span>
                                <span className="text-color">English</span>
                              </span>
                            </label>
                            <label className="checkbox-single">
                              <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                <span className="checkbox-area d-center">
                                  <input type="checkbox" />
                                  <span className="checkmark d-center"></span>
                                </span>
                                <span className="text-color">French</span>
                              </span>
                            </label>
                            <label className="checkbox-single">
                              <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                <span className="checkbox-area d-center">
                                  <input type="checkbox" />
                                  <span className="checkmark d-center"></span>
                                </span>
                                <span className="text-color">Hindi</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-single">
                              <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                <span className="checkbox-area d-center">
                                  <input type="checkbox" />
                                  <span className="checkmark d-center"></span>
                                </span>
                                <span className="text-color">German</span>
                              </span>
                            </label>
                            <label className="checkbox-single">
                              <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                <span className="checkbox-area d-center">
                                  <input type="checkbox" />
                                  <span className="checkmark d-center"></span>
                                </span>
                                <span className="text-color">Thailand</span>
                              </span>
                            </label>
                            <label className="checkbox-single">
                              <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                <span className="checkbox-area d-center">
                                  <input type="checkbox" />
                                  <span className="checkmark d-center"></span>
                                </span>
                                <span className="text-color">Urdu</span>
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="tour-sidebar-widget">
                        <div className="wid-title">
                          <h3>Amenities</h3>
                        </div>
                        <div className="checkbox-items">
                          <label className="checkbox-single">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center"></span>
                              </span>
                              <span className="text-color">Car Parking</span>
                            </span>
                          </label>
                          <label className="checkbox-single">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center"></span>
                              </span>
                              <span className="text-color">
                                Accepts Credit Cards
                              </span>
                            </span>
                          </label>
                          <label className="checkbox-single">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center"></span>
                              </span>
                              <span className="text-color">Free Coupons</span>
                            </span>
                          </label>
                          <label className="checkbox-single">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center"></span>
                              </span>
                              <span className="text-color">
                                Laundry Service
                              </span>
                            </span>
                          </label>
                          <label className="checkbox-single">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center"></span>
                              </span>
                              <span className="text-color">
                                Outdoor Seating
                              </span>
                            </span>
                          </label>
                          <label className="checkbox-single">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center"></span>
                              </span>
                              <span className="text-color">Reservations</span>
                            </span>
                          </label>
                          <label className="checkbox-single mb-0">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center"></span>
                              </span>
                              <span className="text-color">
                                Wireless Internet
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="search-widget">
                        <form action="#">
                          <button type="submit" className="theme-btn">
                            <span>Search</span>
                            <i className="fal fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="popular-posts">
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: "url(/images/tour/post-1.jpg)",
                          }}
                        ></div>
                        <div className="post-content">
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h5>
                            <Link href="/tour-details">
                              {" "}
                              Explore Scenic Beaches
                            </Link>
                          </h5>

                          <p>
                            From <b> $129.00 </b>
                          </p>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: "url(/images/tour/post-2.jpg)",
                          }}
                        ></div>
                        <div className="post-content">
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h5>
                            <Link href="/tour-details">
                              Tour Beaches Explore{" "}
                            </Link>
                          </h5>
                          <p>
                            From <b> $129.00 </b>
                          </p>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: "url(/images/tour/post-3.jpg)",
                          }}
                        ></div>
                        <div className="post-content">
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h5>
                            <Link href="/tour-details">Beaches Tour Enjoy</Link>
                          </h5>
                          <p>
                            From <b> $129.00 </b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="row g-4">
                  {TourTwoData.slice(0, 9).map((item) => {
                    return (
                      <div
                        className="col-xl-4 col-lg-6 col-md-6 "
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
                              <Link href={`${item.destination}`}>
                                {item.title}
                              </Link>
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

export default TourList;
