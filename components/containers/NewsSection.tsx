"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NewsData from "@/public/data/news-data";

const NewsSection = () => {
  const pathname = usePathname();

  const isIndex2Page = pathname === "/index-2";

  return (
    <section
      className={`news-section section-padding ${
        !isIndex2Page ? "section-bg-2" : " section-bg"
      }`}
    >
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Latest Blog & News
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="500">
            Latest Travel Insights and <br />
            Destination Guides
          </h2>
        </div>
        <div className="row">
          {NewsData.slice(0, 3).map((item) => {
            return (
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="news-box-items-4 van-tilt">
                  <div className="news-img">
                    <Image src={item.image} alt={item.title} />
                    <ul className="post-date">
                      <li>{item.day}</li>
                      <li>{item.month}</li>
                    </ul>
                  </div>
                  <div className="news-content">
                    <ul>
                      <li>
                        {" "}
                        <b>By</b> {item.author}
                      </li>
                      <li>
                        <b>{item.comments}</b> Comments
                      </li>
                    </ul>
                    <h3>
                      <Link href={`${item.destination}`}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <Link href={`${item.destination}`} className="link-btn">
                      Continue Reading{" "}
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

export default NewsSection;
