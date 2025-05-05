import Link from "next/link";
import Image from "next/image";
import plane from "@/public/images/breadcrumb-plane.png";

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding  bg-cover"
      style={{
        backgroundImage: "url(/images/breadcrumb-bg.jpg)",
      }}
    >
      <div className="container-fluid">
        <div className="page-heading">
          <ul
            className="breadcrumb-items "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <i className="far fa-slash"></i>
            </li>
            <li>{title}</li>
          </ul>
          <h1 data-aos-duration="800" data-aos="fade-up" data-aos-delay="500">
            {title}
          </h1>
        </div>
      </div>
      <div className="plane-shape float-bob-x">
        <Image src={plane} alt="img" />
      </div>
    </div>
  );
};

export default Breadcrumb;
