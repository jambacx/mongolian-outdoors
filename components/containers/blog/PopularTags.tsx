import Link from "next/link";
import TagsData from "@/public/data/popular-tags";

const PopularTags = () => {
  return (
    <div className="tagcloud">
      {TagsData.map((item) => {
        return (
          <Link href={`${item.destination}`} key={item.id}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default PopularTags;
