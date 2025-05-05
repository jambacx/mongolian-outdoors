import Link from "next/link";
import Image from "next/image";
import circleOne from "@/public/images/tour/circle.png";
import circleTwo from "@/public/images/tour/circle2.png";
import circleThree from "@/public/images/tour/circle3.png";
import shapeOne from "@/public/images/tour/shape1.png";
import shapeTwo from "@/public/images/tour/shape2.png";
import shapeThree from "@/public/images/tour/shape3.png";
import shapeFour from "@/public/images/tour/new/shape-image.png";
import shapeFive from "@/public/images/tour/new/shape-image-2.png";

const TourPackage = () => {
  return (
    <section className="tour-package-section fix section-bg-2 section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Our Tour Package
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Our Best Tour Package
          </h2>
          <p
            className="mt-3 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Our attraction passes save you more than buying individual tickets
            for your tour <br /> package system. Our attraction passes save you
            more than.
          </p>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="tour-main-item mt-30">
              <div
                className="tour-box-items-3 bg-cover"
                style={{
                  backgroundImage: "url(/images/tour/26.jpg)",
                }}
              >
                <div className="tour-content">
                  <h3>
                    Save &amp; <br /> explore global <br />
                    destinations!
                  </h3>
                  <Link href="/tour-details" className="theme-btn">
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
            <div className="tour-main-item mt-30">
              <div
                className="tour-box-items-3 style-2 bg-cover"
                style={{
                  backgroundImage: "url(/images/tour/27.jpg)",
                }}
              >
                <div className="tour-content">
                  <h3>
                    Plan Ahead &amp; <br />
                    Save Big on <br />
                    Vacation
                  </h3>
                  <Link href="/tour-details" className="theme-btn">
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
            <div className="tour-main-item mt-30">
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
                  <Link href="/tour-details" className="theme-btn">
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
          <div
            className="col-xl-6 col-lg-12 col-md-12 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              className="tour-box-items-5 bg-cover"
              style={{
                backgroundImage: "url(/images/tour/new/02.jpg)",
              }}
            >
              <div className="tour-content">
                <span>Discount 65% off</span>
                <h3>Amazing holiday</h3>
                <p>
                  We offer carefully curated destinations and tours that capture
                  the true.
                </p>
                <Link href="/tour-details" className="theme-btn">
                  <span>Book Now</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
              <div className="percent-image">
                <Image src={circleOne} alt="img" />
              </div>
              <div className="shape-image">
                <Image src={shapeFour} alt="img" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 col-md-12 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              className="tour-box-items-5 bg-2 bg-cover"
              style={{
                backgroundImage: "url(/images/tour/new/03.jpg)",
              }}
            >
              <div className="tour-content">
                <span>Discount 30% off</span>
                <h3>Adventure awaits</h3>
                <p>
                  We offer carefully curated destinations and tours that capture
                  the true.
                </p>
                <Link href="/tour-details" className="theme-btn">
                  <span>Book Now</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
              <div className="percent-image">
                <Image src={circleOne} alt="img" />
              </div>
              <div className="shape-image">
                <Image src={shapeFive} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackage;
