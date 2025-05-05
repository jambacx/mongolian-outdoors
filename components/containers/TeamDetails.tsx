import Link from "next/link";
import Image from "next/image";
import thumb from "@/public/images/team/details.jpg";

const TeamDetails = () => {
  return (
    <section className="team-details-section fix section-padding">
      <div className="container">
        <div className="team-details-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="team-details-image">
                <Image src={thumb} alt="team-img" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-details-content">
                <div className="details-info">
                  <h3>Salman Ahmed</h3>
                  <span>Software Engineer</span>
                </div>
                <p className="mt-3">
                  Mauris sapien neque, placerat ut dolor nec, egestas tincidunt
                  felis. Sed in ornare quam, finibus dui aliquam justo duis eros
                  quam, semper at libero sed, vehicula the consequat arcu. In
                  ornare, enim at egestas bibendum, ligula ante congue arcu, sed
                  ornare sem nulla is nec magna. Morbi faucibus.
                </p>
                <div className="progress-area mt-4">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">tour package</h6>
                        <span className="point">90%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Travel</h6>
                        <span className="point">95%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-icon">
                  <span>Social Media:</span>
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="team-single-history pt-5">
            <div className="title">
              <h3>Education Background</h3>
            </div>
            <h5 className="pt-5">
              Diploma in Web Design <span>2012 - 2014</span>
            </h5>
            <p className="mt-3">
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s in the ou
              standard dummy text ever since the 1500s, when an unknown printer
              took.Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry&apos;s in the abouti
              standard dummy
            </p>
            <h5 className="pt-5">
              Degree in UI/UX Design <span>2015 - 2016 </span>
            </h5>
            <p className="mt-3">
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s in the ou
              standard dummy text ever since the 1500s, when an unknown printer
              took.Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry&apos;s in the abouti
              standard dummy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
