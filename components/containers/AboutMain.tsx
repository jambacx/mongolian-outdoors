import Link from "next/link";
import Image from "next/image";
import Counter from "../layout/Counter";
import shape from "@/public/images/about/circle-shape.png";
import thumb from "@/public/images/about/02.png";

const AboutMain = () => {
  return (
    <section className="about-section section-padding section-bg fix">
      <div className="container">
        <div className="about-wrappper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src={thumb}
                  alt="img"
                  className="wow img-custom-anim-left"
                />
                <div className="cricle-shape float-bob-y">
                  <Image src={shape} alt="img" />
                </div>
                <div className="counter-box float-bob-y">
                  <div className="content">
                    <h2
                      className="odo-wrap"
                      style={{ justifyContent: "center" }}
                    >
                      <span className="count">
                        <Counter value={29} />
                      </span>
                      +
                    </h2>
                    <p>LOCATIONS WORLD WIDE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span data-aos-duration="800" data-aos="fade-up">
                    About Mongolian Outdoors
                  </span>
                  <h2
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Our Journey Memorable <br />
                    Adventures Worldwide
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Our attraction pass save you more than buying individual{" "}
                  <br /> tickets for your tour package system.
                </p>
                <div className="about-area">
                  <div
                    className="about-items "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="flaticon-support"></i>
                    </div>
                    <div className="content">
                      <h4>24/7 Support for Hassle-Free Trips</h4>
                      <p>
                        Our attraction pass save you more than buying individual
                        tickets for your tour package system.
                      </p>
                    </div>
                  </div>
                  <div
                    className="about-items "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="icon">
                      <i className="flaticon-exclusive"></i>
                    </div>
                    <div className="content">
                      <h4>Exclusive Deals on Top Destinations</h4>
                      <p>
                        Our attraction pass save you more than buying individual{" "}
                        <br /> tickets for your tour package system.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Link href="/about" className="theme-btn ">
                    <span>More About Mongolian Outdoors</span>{" "}
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

export default AboutMain;
