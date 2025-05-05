import Link from "next/link";
import Image from "next/image";
import TeamData from "@/public/data/team-data";

const TeamSection = () => {
  return (
    <section className="team-section-4 section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Our Team
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Tours Guiding Team
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
          {TeamData.map((item) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="team-card-items-4 van-tilt">
                  <div className="thumb">
                    <Image src={item.image} alt={item.name} />
                  </div>
                  <div className="content">
                    <span>{item.designation}</span>
                    <h3>
                      <Link href={`${item.destination}`}>{item.name}</Link>
                    </h3>
                    <div className="social-icon">
                      <Link href={`${item.facebook}`}>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href={`${item.twitter}`}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href={`${item.dribble}`}>
                        <i className="fas fa-basketball-ball"></i>
                      </Link>
                      <Link href={`${item.instagram}`}>
                        <i className="fab fa-instagram"></i>
                      </Link>
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

export default TeamSection;
