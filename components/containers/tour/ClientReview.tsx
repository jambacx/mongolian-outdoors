import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/layout/Counter";
import author from "@/public/images/tour/client.png";
import quote from "@/public/images/tour/quote.png";

const ClientReview = () => {
  return (
    <>
      <div className="review-area">
        <h3>Customer Reviews</h3>
        <div className="courses-reviews-box-items">
          <div className="courses-reviews-box">
            <div className="reviews-box">
              <h2 className="odo-wrap" style={{ justifyContent: "center" }}>
                <span className="odometer">
                  <Counter value={4.9} />
                </span>
              </h2>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>856+ Reviews</p>
            </div>
            <div className="reviews-ratting-right">
              <div className="reviews-ratting-item">
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="progress">
                  <div className="progress-value style-two"></div>
                </div>
                <span>Services</span>
              </div>
              <div className="reviews-ratting-item">
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="progress">
                  <div className="progress-value style-three"></div>
                </div>
                <span>Safety</span>
              </div>
              <div className="reviews-ratting-item">
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="progress">
                  <div className="progress-value style-three"></div>
                </div>
                <span>Guides</span>
              </div>
              <div className="reviews-ratting-item">
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="progress">
                  <div className="progress-value style-four"></div>
                </div>
                <span>Foods</span>
              </div>
              <div className="reviews-ratting-item">
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="progress">
                  <div className="progress-value style-five"></div>
                </div>
                <span>Hotels</span>
              </div>
              <div className="reviews-ratting-item">
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="progress">
                  <div className="progress-value style-five"></div>
                </div>
                <span>Places</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client-review-items">
        <h3>Clients Reviews</h3>
        <div className="clinet-box-items">
          <div className="clinet-box">
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h5>
              <q>
                Our family trip was amazing from start to finish! The itinerary
                was perfect, the guides were knowledgeable, and the service was
                excellent. I can&apos;t wait to book our next adventure!
              </q>
            </h5>
            <div className="review-wrap-area d-flex gap-4 align-items-center">
              <div className="review-thumb">
                <Image src={author} alt="img" />
              </div>
              <div className="review-content">
                <div className="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="cont">
                    <h5>Smith Thomas</h5>
                    <span>from New York, USA</span>
                  </div>
                  <h6>
                    <Link href="/">Reply</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="clinet-box style-2">
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h5>
              <q>
                The itinerary was perfect, the guides were knowledgeable, and
                the service was excellent. I can&apos;t wait to book our next
                adventure!
              </q>
            </h5>
            <div className="review-wrap-area d-flex gap-4 align-items-center">
              <div className="review-thumb">
                <Image src={author} alt="img" />
              </div>
              <div className="review-content">
                <div className="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="cont">
                    <h5>Smith Thomas</h5>
                    <span>from New York, USA</span>
                  </div>
                  <h6>
                    <Link href="/">Reply</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clinet-box-3">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h5>
            <q>
              Our family trip was amazing from start to finish! The itinerary
              was perfect, the guides were knowledgeable, and the service was
              excellent. I can&apos;t wait to book our next adventure!
            </q>
          </h5>
          <div className="review-wrap-area d-flex gap-4 align-items-center">
            <div className="review-thumb">
              <Image src={author} alt="img" />
            </div>
            <div className="review-content">
              <div className="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <div className="cont">
                  <h5>Smith Thomas</h5>
                  <span>from New York, USA</span>
                </div>
                <Image src={quote} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-comment-items">
        <h3>Add Your Reviews</h3>
        <ul>
          <li>
            Services
            <div className="star">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </li>
          <li>
            Hotel
            <div className="star">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </li>
          <li>
            Places
            <div className="star">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </li>
        </ul>
        <ul className="mb-0">
          <li>
            Safety
            <div className="star">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </li>
          <li>
            Foods
            <div className="star">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </li>
          <li>
            Guides
            <div className="star">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </li>
        </ul>
        <h4>Leave Feedback</h4>
        <form action="#" id="contact-form" method="POST">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="form-clt">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-clt">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-clt">
                <input
                  type="text"
                  name="email2"
                  id="email21"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-clt">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your comments..."
                ></textarea>
              </div>
            </div>
            <div className="col-lg-6">
              <button type="submit" className="theme-btn text-center">
                <span>Submit Reviews</span>{" "}
                <i className="far fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClientReview;
