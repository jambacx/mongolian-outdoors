import Link from "next/link";
import Image from "next/image";
import CommentData from "@/public/data/comment-data";
import CommentForm from "./blog/CommentForm";
import one from "@/public/images/news/post-4.jpg";
import two from "@/public/images/news/post-5.jpg";
import PopularFeed from "./blog/PopularFeed";
import BlogCategories from "./blog/BlogCategories";
import PopularTags from "./blog/PopularTags";
import PostSearchForm from "./blog/PostSearchForm";

const BlogDetailsSection = () => {
  return (
    <section className="blog-wrapper news-wrapper section-padding">
      <div className="container">
        <div className="news-area">
          <div className="row">
            <div className="col-12 col-xl-8 col-lg-7">
              <div className="blog-post-details border-wrap mt-0">
                <div className="single-blog-post post-details mt-0">
                  <div className="post-content pt-0">
                    <h2>The whimsically named Egg Canvas brainchild</h2>
                    <div className="post-meta mt-3">
                      <span>
                        <i className="fal fa-user"></i>Shikhon .Ha
                      </span>
                      <span>
                        <i className="fal fa-comments"></i>15 Comments
                      </span>
                      <span>
                        <i className="fal fa-calendar-alt"></i>4th February 2025
                      </span>
                    </div>
                    <p>
                      he whimsically named Egg Canvas is the brainchild of Erica
                      Choi, a design director and photo Sit amet consect velit
                      integer tincidunt scelerisque volutpat neque fermeny massa
                      lacus. grapher based in York. Why the name “Egg Canvas
                      Erica was inspired by her Korean childhood nickname, which
                      means egg while “canvas” medium with wh art is created.
                      “Egg Canvas therefore, is her life—creating beautiful
                      things each day a blank canvas.
                    </p>
                    <p>
                      We have covered many special events such as fireworks,
                      fairs, parades, races, walks, awards ceremonies, fashion
                      shows, sporting events, and even a memorial service.
                    </p>
                    <Image
                      src={one}
                      alt="blog__img"
                      className="single-post-image"
                    />
                    <h2 className="title-anim">
                      You Should Experience Agency At Least Once In Your
                      Lifetime And Here&apos;s Why.
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vulputate vestibulum rhon cus, dolor eget
                      viverra pretium, dolor tellus aliquet nunc, vitae
                      ultricies erat elit eu lacus. Vestibulum non justo fun
                      consectetur, cursus ante, tincidunt sapien. Nulla quis
                      diam sit amet turpis interd enim. Vivamus fauc ex sed nibh
                      egestas elementum. Mauris et bibendum
                    </p>
                    <blockquote>
                      Your time is limited, so don&apos;t waste it living
                      someone else&apos;s life. don&apos;t be trapped by dogma -
                      which is living with the results
                    </blockquote>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing
                    </p>
                    <ul className="checked-list mb-4">
                      <li>Lorem Ipsum generators on the tend to repeat.</li>
                      <li>If you are going to use a passage.</li>
                      <li>Lorem Ipsum generators on the tend to repeat.</li>
                      <li>Lorem Ipsum generators on the tend to repeat.</li>
                      <li> If you are going to use a passage.</li>
                    </ul>
                    <h4>Easy & Most Powerful Server Platform.</h4>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing, from how it
                      works to how it compares to digital marketing. Plus, get
                      insight into the benefits and risks of performance
                      marketing and how it can affect your company&apos;s
                      long-term success and profitability.
                    </p>
                    <Image className="alignleft" src={two} alt="blog__img" />
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing
                    </p>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it&apos;s no surprise that
                      different approaches to online marketing are becoming
                      available. One of these new approaches is performance
                      marketing or digital performance marketing. Keep reading
                      to learn all about performance marketing
                    </p>
                  </div>
                </div>
                <div className="row tag-share-wrap">
                  <div className="col-lg-8 col-12">
                    <h4>Releted Tags</h4>
                    <div className="tagcloud">
                      <Link href="/news-details">Business</Link>
                      <Link href="/news-details">Design</Link>
                      <Link href="/news-details">apps</Link>
                      <Link href="/news-details">data</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                    <h4>Social Share</h4>
                    <div className="social-share">
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="comments-section-wrap pt-40">
                  <div className="comments-heading">
                    <h3>03 Comments</h3>
                  </div>
                  <ul className="comments-item-list">
                    {CommentData.map((item) => {
                      return (
                        <li className="single-comment-item" key={item.id}>
                          <div className="author-img">
                            <Image
                              src={item.authorImage}
                              alt={item.authorName}
                            />
                          </div>
                          <div className="author-info-comment">
                            <div className="info">
                              <h5>{item.authorName}</h5>
                              <span>{item.date}</span>
                              <Link href="/" className="theme-btn minimal-btn">
                                <i className="fal fa-reply"></i>Reply
                              </Link>
                            </div>
                            <div className="comment-text">
                              <p>{item.comment}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="comment-form-wrap d-block pt-5">
                  <h3>Post Comment</h3>
                  <CommentForm />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-5">
              <div className="main-sidebar sticky-style">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Search</h3>
                  </div>
                  <div className="search_widget">
                    <PostSearchForm />
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Popular Feeds</h3>
                  </div>
                  <PopularFeed />
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Categories</h3>
                  </div>
                  <BlogCategories />
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Never Miss News</h3>
                  </div>
                  <div className="social-link">
                    <Link href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Popular Tags</h3>
                  </div>
                  <PopularTags />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
