import Link from "next/link";
import Image from "next/image";
import LocationData from "@/public/data/location-data";
import Pagination from "./blog/Pagination";

const DestinationMain = () => {
  return (
    <div className="trending-destinations section-padding">
      <div className="container">
        <div className="row g-4">
          {LocationData.map((item) => {
            return (
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="trending-destinations-card-items mt-0 van-tilt">
                  <div className="destinations-img">
                    <Image src={item.image} alt={item.location} />
                    <ul className="destinations-content">
                      <li className="title">
                        <Link href={`${item.destination}`}>
                          {item.location}
                        </Link>
                      </li>
                    </ul>
                    <div className="icon">
                      <Link href={`${item.destination}`}>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="page-nav-wrap mt-5 text-center "
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default DestinationMain;
