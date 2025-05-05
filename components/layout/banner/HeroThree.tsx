import Link from "next/link";
import Image from "next/image";
import CountrySelect from "../select/CountrySelect";
import ActivitySelect from "../select/ActivitySelect";
import DatePick from "./DatePick";
import GuestSelect from "../select/GuestSelect";
import location from "@/public/images/hero/location.png";

const HeroThree = () => {
  return (
    <section
      className="hero-section hero-3 bg-cover"
      style={{
        backgroundImage: "url(/images/hero/03.jpg)",
      }}
    >
      <div className="container-fluid">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-xxl-7 col-lg-6">
            <div className="hero-content">
              <h1
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                travel in <br />
                your favorite destination
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Creating a successful digital services for innovative start-up
                and established businesses. We specialize in crafting
                unforgettable.
              </p>
              <div
                className="button-items"
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link href="/tour" className="theme-btn ">
                  <span>Check Availity</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <Link href="/destination" className="theme-btn bg-2 ">
                  <span>Our Location</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 col-md-8 col-sm-10">
            <div className="destination-box-items wow img-custom-anim-left">
              <h3>Looking for Tours Or Destination</h3>
              <p>
                One siteb <b> 36400+</b> most popular experience.
              </p>
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
                      <div id="datepicker" className="input-group date d-alt">
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
                <Link href="/tour-details" className="theme-btn">
                  <span>Search</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroThree;
