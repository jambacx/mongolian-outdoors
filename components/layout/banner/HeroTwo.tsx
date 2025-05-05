import Image from "next/image";
import CountrySelect from "../select/CountrySelect";
import ActivitySelect from "../select/ActivitySelect";
import DatePick from "./DatePick";
import GuestSelect from "../select/GuestSelect";
import shape from "@/public/images/hero/new/light-shape.png";
import shapeTwo from "@/public/images/hero/new/frame-shape.png";
import plane from "@/public/images/hero/new/plane.png";
import location from "@/public/images/hero/location.png";
import thumbOne from "@/public/images/hero/new/hero-1.jpg";
import thumbTwo from "@/public/images/hero/new/hero-2.jpg";
import thumbThree from "@/public/images/hero/new/hero-3.jpg";

const HeroTwo = () => {
  return (
    <section
      className="hero-section hero-5 bg-cover"
      style={{
        backgroundImage: "url(/images/hero/new/hero-bg-shape.png)",
      }}
    >
      <div className="light-shape">
        <Image src={shape} alt="img" />
      </div>
      <div className="frame-shape">
        <Image src={shapeTwo} alt="img" />
      </div>
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="hero-content">
              <h6 data-aos-duration="800" data-aos="fade-up">
                Tour & Travel Agency
              </h6>
              <h1
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="shape-text">Natural</span>
                <span>World</span> <br />
                Destination
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Velit integer eu tincidunt scelerisque. Sodales volutpat neque
                fermentum malesuada.
              </p>
            </div>
            <div
              className="booking-list-area "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="plane-shape float-bob-x">
                <Image src={plane} alt="img" />
              </div>
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
              <div className="booking-list">
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
              <button type="submit" className="theme-btn">
                <span>
                  Search <i className="far fa-search"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="hero-image-items">
              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className="hero-image "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Image src={thumbOne} alt="img" />
                  </div>
                  <div
                    className="hero-image style-2 "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Image src={thumbTwo} alt="img" />
                  </div>
                </div>
                <div
                  className="col-md-6 "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="hero-image style-3">
                    <Image src={thumbThree} alt="img" />
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

export default HeroTwo;
