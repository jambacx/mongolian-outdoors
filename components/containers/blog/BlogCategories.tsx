import Link from "next/link";
import CategoryData from "@/public/data/categories-data";

const BlogCategories = () => {
  return (
    <div className="widget_categories">
      <ul>
        {CategoryData.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`${item.destination}`}>
                {item.title} <span>{item.items}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogCategories;
