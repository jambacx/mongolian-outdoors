import Link from "next/link";
import Image from "next/image";
import thumb from "@/public/images/404.png";

const ErrorSection = () => {
  return (
    <section className="error-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="error-items">
              <div
                className="error-image "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image src={thumb} alt="img" />
              </div>
              <h2
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                404-Page Not Found
              </h2>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                We offer carefully curated destinations and tours that capture
                the true <br /> essence of location, ensuring you experience.
              </p>
              <div
                className="text-center"
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <Link href="/" className="theme-btn ">
                  <span>Go To Homepage</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
