import Link from "next/link";
import Image from "next/image";
import FeaturedPlaceData from "@/public/data/featured-place";

const FeaturedPlaces = () => {
  return (
    <section className="tour-places-section-4 fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Featured Places{" "}
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Amazing Tour Places
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
          <div className="col-12">
            {FeaturedPlaceData.map((item) => {
              return (
                <div
                  className="tour-places-wrapper-4 "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  key={item.id}
                >
                  <div className="content">
                    <span>{item.country}</span>
                    <h3>
                      <Link href={`${item.destination}`}>{item.spot}</Link>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  <ul className="list">
                    <li>
                      <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>({item.review}) Reviews</span>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      {item.location}
                    </li>
                    <li>
                      <i className="far fa-calendar-minus"></i>
                      {item.day} Days / {item.night} Night
                    </li>
                  </ul>
                  <div className="thumb">
                    <Image src={item.image} alt={item.spot} />
                    <span className="price-list">
                      <span className="price">${item.price}</span>
                      <span className="person">/ person</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;
