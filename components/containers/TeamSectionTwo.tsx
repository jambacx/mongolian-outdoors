import Link from "next/link";
import Image from "next/image";
import TeamTwoData from "@/public/data/team-data-two";
import shape from "@/public/images/team/plane-shape.png";
import shapeTwo from "@/public/images/team/plane-2.png";
import frame from "@/public/images/team/frame.png";

const TeamSectionTwo = () => {
  return (
    <section className="team-section fix section-padding section-bg">
      <div className="plane-shape float-bob-y">
        <Image src={shape} alt="img" />
      </div>
      <div className="plane-shape-2 float-bob-y">
        <Image src={shapeTwo} alt="img" />
      </div>
      <div className="frame-shape float-bob-x">
        <Image src={frame} alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Our Team
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Tours Guiding Team
          </h2>
          <p
            className="mt-3 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Our attraction passes save you more than buying individual tickets
            for your tour package <br /> system. Our attraction passes save you
            more than for your travelling.
          </p>
        </div>
        <div className="row">
          {TeamTwoData.slice(0, 4).map((item) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="team-box-items van-tilt">
                  <div className="thumb">
                    <Image src={item.image} alt={item.name} />
                  </div>
                  <div className="content">
                    <p>{item.designation}</p>
                    <h3>
                      <Link href={`${item.destination}`}>{item.name}</Link>
                    </h3>
                    <div className="social-icon">
                      <Link href={`${item.facebook}`}>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href={`${item.instagram}`}>
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href={`${item.twitter}`}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="team-button text-center mt-5 "
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link href="/team" className="theme-btn">
            <span>View All Member</span>{" "}
            <i className="far fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionTwo;
