"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import FaqData from "@/public/data/faq-data";
import one from "@/public/images/faq/plane-shape.png";
import two from "@/public/images/faq/frame-shape.png";
import three from "@/public/images/faq/light-shape.png";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section section-padding fix">
      <div className="plane-shape">
        <Image src={one} alt="img" />
      </div>
      <div className="frame-shape">
        <Image src={two} alt="img" />
      </div>
      <div className="light-shape">
        <Image src={three} alt="img" />
      </div>
      <div className="container">
        <div className="section-title style-2 text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Frequently Asked Questions
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Transforming Vision into <br />
            Reality Together
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="faq-items style-2">
              <div
                className="faq-accordion"
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="accordion" id="accordion2">
                  {FaqData.slice(0, 4).map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <div className="accordion-item " key={item.id}>
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
                            <div className="accordion-body">{item.answer}</div>
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
    </section>
  );
};

export default Faq;
