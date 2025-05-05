import Link from "next/link";
import Image from "next/image";
import TeamTwoData from "@/public/data/team-data-two";

const TeamMain = () => {
  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {TeamTwoData.map((item) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="team-box-items mt-0 van-tilt">
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
      </div>
    </section>
  );
};

export default TeamMain;
