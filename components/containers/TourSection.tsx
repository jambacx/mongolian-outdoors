import Link from "next/link";
import Image from "next/image";
import TourData from "@/public/data/tour-data";

const TourSection = () => {
  return (
    <section className="tour-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Featured Places
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Amazing Tour Places
          </h2>
          <p
            className="mt-3 mt-mb-0 "
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
          {TourData.map((item) => {
            return (
              <div
                className="col-xl-3 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="tour-box-items van-tilt">
                  <div className="thumb">
                    <Image src={item.image} alt={item.spot} />
                  </div>
                  <div className="content">
                    <span>{item.country}</span>
                    <h4>
                      <Link href={`${item.destination}`}>{item.spot}</Link>
                    </h4>
                    <h6>
                      From <span>${item.price}</span>{" "}
                      <del>${item.discount}</del>
                    </h6>
                    <ul className="list">
                      <li>
                        <i className="far fa-calendar"></i>
                        {item.day} Days / {item.night} Night
                      </li>
                      <li>
                        <i className="far fa-flag"></i>
                        {item.totalCountry} Countries
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
