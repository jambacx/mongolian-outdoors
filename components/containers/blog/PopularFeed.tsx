import Link from "next/link";
import PopularFeedData from "@/public/data/popular-feed";

const PopularFeed = () => {
  return (
    <div className="popular-posts">
      {PopularFeedData.map((item) => {
        return (
          <div className="single-post-item mb-0" key={item.id}>
            <div
              className="thumb bg-cover"
              style={{
                backgroundImage: `url(${item.image.src})`,
              }}
            ></div>
            <div className="post-content">
              <h5>
                <Link href={`${item.destination}`}>{item.title}</Link>
              </h5>
              <div className="post-date">
                <i className="far fa-calendar-alt"></i>
                {item.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularFeed;
