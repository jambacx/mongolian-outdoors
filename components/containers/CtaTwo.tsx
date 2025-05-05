import Link from "next/link";
import Image from "next/image";
import apple from "@/public/images/apply-store.png";
import playStore from "@/public/images/play-store.jpg";
import thumb from "@/public/images/cta/mobile-app.png";

const CtaTwo = () => {
  return (
    <section className="cta-app-section fix section-padding section-bg pt-0">
      <div className="container">
        <div
          className="cta-app-wrapper bg-cover"
          style={{
            backgroundImage: "url(/images/cta/cta-apps-bg.jpg)",
          }}
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="cta-app-content">
                <div className="section-title mb-0">
                  <span
                    className="text-white "
                    data-aos-duration="800"
                    data-aos="fade-up"
                  >
                    Download Mobile App
                  </span>
                  <h2
                    className="text-white "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    We Are Available On the Store Get Our Mobile Apps
                  </h2>
                  <p
                    className="mt-4 text-white "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="130"
                  >
                    We offer carefully curated destinations and tours that
                    capture the true essence of location, ensuring you
                    experience. Our attraction pass save you more than buying
                    individual tickets for your tour package system.
                  </p>
                </div>
                <h6
                  className="app-text "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="160"
                >
                  Your all-in-one travel app
                </h6>
                <div
                  className="apps-items "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="190"
                >
                  <Link href="/contact">
                    <Image src={apple} alt="img" />
                  </Link>
                  <Link href="/contact">
                    <Image src={playStore} alt="img" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
          <div className="app-image wow img-custom-anim-right">
            <Image src={thumb} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
