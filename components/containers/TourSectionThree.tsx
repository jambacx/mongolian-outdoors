import Link from "next/link";
import Image from "next/image";
import TourDataThree from "@/public/data/tour-data-three";

const TourSectionThree = () => {
  return (
    <section
      className="tour-section section-padding fix bg-cover section-bg"
      style={{
        backgroundImage: "url(/images/tour/bg.png)",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Featured Places
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Amazing Tour Places
          </h2>
        </div>
        <div className="row">
          {TourDataThree.map((item) => {
            return (
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="tour-box-items-2 van-tilt">
                  <div className="tour-image">
                    <Image src={item.image} alt={item.title} />
                    <div className="post-bar">
                      <div className="post">FEATURED</div>
                      <div className="icon">
                        <i className="fas fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <div className="tour-content">
                    <h3>
                      <Link href={`${item.destination}`}>{item.title}</Link>
                    </h3>
                    <ul className="meta">
                      <li>
                        <i className="fal fa-map-marker-alt"></i>
                        {item.spot}
                      </li>
                    </ul>
                    <div className="rating-bar">
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star"></i>
                          {item.rating} BY {item.reviews} REVIEWS
                        </li>
                      </ul>
                      <ul className="icon">
                        <li>
                          <i className="fal fa-video"></i>
                        </li>
                        <li>
                          <i className="fal fa-camera-alt"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="tour-btn">
                      <Link href={`${item.destination}`} className="theme-btn">
                        <span>Book Now</span>{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </Link>
                      <h2>
                        ${item.price}/<span>/per person</span>
                      </h2>
                    </div>
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

export default TourSectionThree;
