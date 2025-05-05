"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import FaqData from "@/public/data/faq-data";
import thumb from "@/public/images/faq/01.png";

const FaqTwo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section fix">
      <div className="container">
        <div className="faq-wrapper section-padding pt-0">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div className="faq-content">
                <div className="section-title">
                  <span
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Frequently Ask Questions
                  </span>
                  <h2
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Frequently Ask <br />
                    Questions About Our <br />
                    Mongolian Outdoors
                  </h2>
                </div>
                <div className="faq-image wow img-custom-anim-bottom">
                  <Image src={thumb} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-items">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion2">
                    {FaqData.slice(0, 8).map((item, index) => {
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
                          <AnimateHeight
                            duration={400}
                            height={isActive ? "auto" : 0}
                          >
                            <div
                              className={`accordion-collapse collapse ${
                                isActive ? "show" : ""
                              }`}
                            >
                              <div className="accordion-body">
                                {item.answer}
                              </div>
                            </div>
                          </AnimateHeight>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTwo;
