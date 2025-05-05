import Link from "next/link";

const Topbar = () => {
  return (
    <div className="header-top-section">
      <div className="container-fluid">
        <div className="header-top-wrapper">
          <ul className="top-left">
            <li>
              <i className="far fa-envelope"></i>
              <Link href="mailto:info@example.com">info@outdoors.com</Link>
            </li>
            <li>
              <i className="far fa-map-marker-alt"></i>
              6th Khoroo, Sukhbaatar District, Ulaanbaatar, Mongolia
            </li>
          </ul>
          <div className="social-icon">
            <Link href="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
