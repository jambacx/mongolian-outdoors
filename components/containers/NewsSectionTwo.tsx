import Link from "next/link";
import Image from "next/image";
import NewsTwoData from "@/public/data/news-data-two";

const NewsSectionTwo = () => {
  return (
    <section className="news-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Latest Blog & News
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Latest Travel Insights and <br /> Destination Guides
          </h2>
        </div>
        <div className="row">
          {NewsTwoData.map((item) => {
            return (
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="news-card-items van-tilt">
                  <div className="news-image">
                    <Image src={item.image} alt="img" />
                    <ul className="post">
                      <li>
                        <i className="far fa-calendar"></i>
                        {item.date}
                      </li>
                      <li className="style-2">{item.tag}</li>
                    </ul>
                  </div>
                  <div className="news-content">
                    <h3>
                      <Link href={`${item.destination}`}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <Link href={`${item.destination}`} className="theme-btn">
                      <span>Read More</span>{" "}
                      <i className="far fa-long-arrow-right"></i>
                    </Link>
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

export default NewsSectionTwo;
