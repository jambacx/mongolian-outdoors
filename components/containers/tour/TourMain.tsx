import Link from "next/link";
import Image from "next/image";
import TourData from "@/public/data/tour-data";

const TourMain = () => {
  return (
    <section className="tour-section fix section-padding">
      <div className="container">
        <div className="row g-4">
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

export default TourMain;
