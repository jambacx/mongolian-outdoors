"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FaqData from "@/public/data/faq-data";
import GoogleMap from "./GoogleMap";
import thumb from "@/public/images/destinations/02.jpg";
import discount from "@/public/images/destinations/03.jpg";

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
                  <Image src={thumb} alt="Khongor Sand Dunes" />
                </div>
                <div className="details-content">
                  <h2>Explore Khongor Sand Dunes, Mongolia</h2>
                  <p>
                    The Khongor Sand Dunes, also known as "Singing Sands," are
                    among the largest and most spectacular sand dunes in
                    Mongolia. Stretching over 180 kilometers in length and
                    reaching heights of up to 300 meters, these dunes are a
                    natural wonder of the Gobi Desert. The dunes produce a
                    unique humming sound when the wind moves the sand, giving
                    them their melodic nickname.
                  </p>
                  <p className="mt-3">
                    Adjacent to the dunes lies the Khongoryn Gol River, creating
                    a lush green oasis that contrasts beautifully with the
                    golden sands. Visitors can experience camel rides across the
                    dunes, hike to the summit for panoramic views, and immerse
                    themselves in the nomadic culture by staying in traditional
                    Mongolian gers.
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
                      <span>Mongolia</span>
                    </li>
                    <li>
                      Visa Requirements:
                      <span>Visa required for most countries</span>
                    </li>
                    <li>
                      Languages Spoken:
                      <span>Mongolian</span>
                    </li>
                    <li>
                      Currency Used:
                      <span>Mongolian Tögrög (MNT)</span>
                    </li>
                    <li>
                      Area:
                      <span>Approximately 965 km²</span>
                    </li>
                    <li>
                      Location:
                      <span>Gobi Desert, Ömnögovi Province</span>
                    </li>
                  </ul>
                  <Link href="/destination-details" className="theme-btn w-100">
                    <span>Book Now</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
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
