"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FaqData from "@/public/data/faq-data";
import GoogleMap from "./GoogleMap";
import thumb from "@/public/images/destinations/details1.jpg";
import discount from "@/public/images/destinations/disocunt.png";

const DestinationDetails = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="destination-details-section section-padding">
      <div className="container">
        <div className="destination-details-wrapper">
          <div className="row g-5">
            <div className="col-xl-8 col-12">
              <div className="details-post">
                <div className="details-image">
                  <Image src={thumb} alt="img" />
                </div>
                <div className="details-content">
                  <h2>Explore Zagreb, Croatia</h2>
                  <p>
                    We offer carefully curated destinations and tours that
                    capture the true essence of location, ensuring you
                    experience. There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteradution
                    in some form by injected humour, or randomised words which
                    don&apos;t look even slightly believable. If you are going
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteradution in
                    some form by injected humour, or randomised words which
                    don&apos;t look even slightly believable. If you are going
                  </p>
                  <p className="mt-3">
                    If you are going There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered
                    alteradution in some form by injected humour, or randomised
                    words which don&apos;t look even slightly believable. If you
                    are going
                  </p>
                  <div className="destination-list-item">
                    <h4>Experience the Difference</h4>
                    <div className="destination-list">
                      <ul className="list">
                        <li>
                          <i className="flaticon-check"></i>
                          Trusted, Local Travel Experts
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Flexible, Hassle-Free Bookings
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Real-Time Itinerary Updates
                        </li>
                      </ul>
                      <ul className="list">
                        <li>
                          <i className="flaticon-check"></i>
                          Flexible Cancellation Policies
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Customized Travel Experiences
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Exclusive Travel Deals
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="faq-items">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion2">
                        {FaqData.slice(0, 4).map((item, index) => {
                          const isActive = activeIndex === index;
                          return (
                            <div className="accordion-item mb-3" key={item.id}>
                              <h5 className="accordion-header">
                                <button
                                  className={`accordion-button ${
                                    isActive ? "" : "collapsed"
                                  }`}
                                  type="button"
                                  onClick={() => handleToggle(index)}
                                >
                                  {item.question}
                                </button>
                              </h5>
                              <div
                                className={`accordion-collapse collapse ${
                                  isActive ? "show" : ""
                                }`}
                              >
                                <div className="accordion-body">
                                  {item.answer}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="map-area">
                    <h2>View in Map</h2>
                    <GoogleMap />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12">
              <div className="main-side-bar sticky-style">
                <div className="destination-single-sideber-widget">
                  <div className="widget-title">Destination Info</div>
                  <ul className="destination-card">
                    <li>
                      Country:
                      <span>Croatia</span>
                    </li>
                    <li>
                      Visa Requirements:
                      <span>Croatia</span>
                    </li>
                    <li>
                      Languages Spoken:
                      <span>English</span>
                    </li>
                    <li>
                      Currency Used:
                      <span>USD</span>
                    </li>
                    <li>
                      Area(km3):
                      <span>88.000 km3</span>
                    </li>
                    <li>
                      Location:
                      <span>34</span>
                    </li>
                  </ul>
                  <Link href="/destination-details" className="theme-btn w-100">
                    <span>Book Now</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div
                  className="offer-card bg-cover"
                  style={{
                    backgroundImage:
                      "url(/images/destinations/offter-card.jpg)",
                  }}
                >
                  <h3>Book Now and Enjoy Amazing Savings!</h3>
                  <Image src={discount} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;
