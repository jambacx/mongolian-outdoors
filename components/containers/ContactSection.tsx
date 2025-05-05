import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/01.png";
import two from "@/public/images/02.png";

const ContactSection = () => {
  return (
    <section className="contact-section section-padding fix">
      <div className="shape-1">
        <Image src={one} alt="img" />
      </div>
      <div className="shape-2">
        <Image src={two} alt="img" />
      </div>
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="contact-info-content ms-0">
                <div className="section-title">
                  <span data-aos-duration="800" data-aos="fade-up">
                    Contact Us
                  </span>
                  <h2
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Contact with Us for <br />
                    Your Any Help
                  </h2>
                </div>
                <p
                  data-aos-duration="800"
                  data-aos="fade-up"
                  className="mt-4 mt-md-0"
                  data-aos-delay="500"
                >
                  We offer carefully curated destinations and tours that capture
                  the true essence of location, ensuring you experience. Our
                  attraction pass saves you more than buying individual tickets.
                </p>
                <div className="contact-info">
                  {/* Location */}
                  <div
                    className="contact-items"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <span>Our Location</span>
                      <h3>Sükhbaatar Square, Ulaanbaatar, Mongolia</h3>
                    </div>
                  </div>
                  {/* Phone */}
                  <div
                    className="contact-items"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <span>Phone Number</span>
                      <h3>
                        <Link href="tel:+97680813636">+976 8081 3636</Link>
                      </h3>
                    </div>
                  </div>
                  {/* Email */}
                  <div
                    className="contact-items mb-0"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="content">
                      <span>Send Email</span>
                      <h3>
                        <Link href="mailto:mongolianoutdoors@gmail.com">
                          mongolianoutdoors@gmail.com
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-content">
                <h3
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Send Your Message!
                </h3>
                <p
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  We offer carefully curated destinations and tours that capture
                  the true essence of location, ensuring you experience.
                </p>
                <form
                  action="contact.php"
                  id="contact-form1"
                  method="POST"
                  className="contact-form-items"
                >
                  <div className="row g-4">
                    <div
                      className="col-lg-6"
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="form-clt">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-12"
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter name"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-12"
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="900"
                    >
                      <div className="form-clt">
                        <textarea
                          name="message"
                          placeholder="Enter message..."
                        ></textarea>
                      </div>
                    </div>
                    <div
                      className="col-lg-12"
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <button type="submit" className="theme-btn">
                        <span>Send Message</span>{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
