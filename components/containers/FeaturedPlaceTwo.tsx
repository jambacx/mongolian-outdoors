import Link from "next/link";
import Image from "next/image";
import FeaturedPlaceTwoData from "@/public/data/featured-place-two";

const FeaturedPlaceTwo = () => {
  return (
    <section className="top-hotel-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span data-aos-duration="800" data-aos="fade-up">
              Featured Places{" "}
            </span>
            <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
              Discover the World&apos;s <br /> Class Top Hotel
            </h2>
          </div>
          <p data-aos-duration="800" data-aos="fade-up" data-aos-delay="500">
            Our attraction passes save you more than buying <br /> individual
            tickets for your tour package system. Our <br /> attraction passes
            save you.
          </p>
        </div>
      </div>
      <div className="container custom-container">
        <div className="row">
          {FeaturedPlaceTwoData.map((item) =>
            item.alternate ? (
              <div
                className="col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="top-hotel-box-item style-2">
                  <div className="hotel-content">
                    <span className="location-icon">
                      <i className="far fa-map-marker-alt"></i>
                      {item.location}
                    </span>
                    <h3>
                      <Link href={`${item.destination}`}>{item.title}</Link>
                    </h3>
                    <div className="list-items">
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M15.0668 7.62667V2.89987C15.0668 1.93871 14.2848 1.15674 13.3237 1.15674H3.67628C2.71512 1.15674 1.93322 1.93871 1.93322 2.89987V7.62667C0.825695 7.89309 0 8.89141 0 10.0795V13.6051C0 13.8848 0.226744 14.1116 0.506447 14.1116H1.93319V15.3365C1.93319 15.6162 2.15993 15.8429 2.43963 15.8429C2.71934 15.8429 2.94608 15.6162 2.94608 15.3365V14.1116H14.0539V15.3365C14.0539 15.6162 14.2806 15.8429 14.5603 15.8429C14.84 15.8429 15.0667 15.6162 15.0667 15.3365V14.1116H16.4935C16.7732 14.1116 16.9999 13.8848 16.9999 13.6051V10.0795C17 8.89141 16.1743 7.89309 15.0668 7.62667ZM2.94611 2.89987C2.94611 2.49725 3.2737 2.16967 3.67628 2.16967H13.3237C13.7263 2.16967 14.0539 2.49725 14.0539 2.89987V7.55634H12.3803V6.75734C12.3803 5.43353 11.3033 4.35656 9.9795 4.35656H7.02057C5.69676 4.35656 4.61978 5.43357 4.61978 6.75734V7.55631H2.94611V2.89987ZM11.3674 6.75734V7.55631H5.63261V6.75734C5.63261 5.99204 6.2552 5.36945 7.0205 5.36945H9.97947C10.7447 5.36942 11.3674 5.99208 11.3674 6.75734ZM1.01289 13.0987V10.0795C1.01289 9.24675 1.6904 8.56924 2.52317 8.56924H14.4768C15.3095 8.56924 15.987 9.24675 15.987 10.0795V13.0987H1.01289Z"
                              fill="#F7921E"
                            />
                          </svg>
                          {item.bed} Bedroom
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <mask
                              id="mask0_308_63933"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="17"
                              height="17"
                            >
                              <path
                                d="M0 1.90735e-06H17V17H0V1.90735e-06Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_308_639)">
                              <path
                                d="M10.7929 4.35881C13.1313 5.27511 14.7872 7.55155 14.7872 10.2148C14.7872 13.6871 11.9724 16.502 8.50004 16.502C5.02772 16.502 2.21289 13.6871 2.21289 10.2148C2.21289 7.61055 3.79622 5.37615 6.0528 4.42169"
                                stroke="#F7921E"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.5499 6.44131C11.8863 7.17018 12.795 8.58835 12.795 10.2148C12.795 12.5831 10.8683 14.5098 8.50007 14.5098C6.13182 14.5098 4.20508 12.5831 4.20508 10.2148C4.20508 8.58835 5.11381 7.17018 6.45021 6.44131"
                                stroke="#F7921E"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.39451 7.89307H7.60583C7.05987 7.89307 6.59509 7.49559 6.51046 6.95621L5.90623 1.77864C5.80067 1.10592 6.32074 0.4979 7.00167 0.4979H9.99868C10.6796 0.4979 11.1997 1.10592 11.0941 1.77864L10.4899 6.95621C10.4052 7.49559 9.94047 7.89307 9.39451 7.89307Z"
                                stroke="#F7921E"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                          {item.wash} Wash room
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_308_678)">
                              <mask
                                id="mask0_308_678533"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="18"
                                height="17"
                              >
                                <path
                                  d="M0.000976562 1.90735e-06H17.001V17H0.000976562V1.90735e-06Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_308_678)">
                                <path
                                  d="M7.02973 8.42632L1.00569 13.8819C0.357892 14.4534 0.327013 15.4528 0.937619 16.0634C1.54822 16.6739 2.54764 16.6431 3.11906 15.9953L8.49996 10.0503"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9543 6.23308L9.96973 8.42578"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.7648 5.04347L8.5 7.09473"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.2429 5.76089C13.413 6.59077 12.0675 6.59077 11.2376 5.76089C10.4078 4.93105 10.4078 3.58556 11.2376 2.75568C12.0675 1.92583 14.4963 0.842479 15.3262 1.67236C16.1561 2.5022 15.0727 4.93105 14.2429 5.76089Z"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.06934 6.26115C9.35689 10.9968 6.67401 8.03373 13.8828 15.9953C14.4542 16.6431 15.4536 16.6739 16.0642 16.0634C16.6748 15.4528 16.6439 14.4533 15.9962 13.8819C15.5019 13.4344 6.69858 5.46374 6.26199 5.06849"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.19467 2.18843L5.85206 2.84582C6.63011 3.62387 6.63011 4.88512 5.85206 5.66317L5.66423 5.85103C4.88614 6.62908 3.62492 6.62908 2.84684 5.85103L2.18945 5.19361L5.19467 2.18843Z"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.19434 2.18848L3.50391 0.498039"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.18946 5.19385L0.499023 3.50344"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.69239 3.69092L2.00195 2.00048"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_308_67801">
                                <rect
                                  width="17"
                                  height="17"
                                  fill="white"
                                  transform="translate(0.000976562)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          {item.kitchen} Kitchen
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_308_725)">
                              <path
                                d="M16.8321 5.77088C12.2377 1.17664 4.76226 1.17664 0.167943 5.77088C-0.0559812 5.99488 -0.0559812 6.35787 0.167943 6.58179C0.391868 6.80564 0.754933 6.80564 0.978782 6.58179C5.12594 2.43464 11.874 2.43464 16.0212 6.58179C16.1331 6.69371 16.2799 6.74968 16.4266 6.74968C16.5733 6.74968 16.7201 6.69371 16.832 6.58179C17.0561 6.35787 17.0561 5.99488 16.8321 5.77088Z"
                                fill="#F7921E"
                              />
                              <path
                                d="M2.14939 7.7527C1.92546 7.9767 1.92546 8.33969 2.14939 8.56361C2.26131 8.67553 2.4081 8.7315 2.55481 8.7315C2.70152 8.7315 2.8483 8.67553 2.96023 8.56361C6.01467 5.50902 10.9847 5.50902 14.0393 8.56346C14.2632 8.78731 14.6262 8.78738 14.8501 8.56338C15.074 8.33946 15.074 7.97639 14.8501 7.75247C11.3485 4.25102 5.65092 4.25117 2.14939 7.7527Z"
                                fill="#F7921E"
                              />
                              <path
                                d="M4.13083 9.73437C3.90691 9.95837 3.90691 10.3214 4.13083 10.5452C4.24276 10.6572 4.38954 10.7132 4.53625 10.7132C4.68296 10.7132 4.82975 10.6572 4.94167 10.5453C6.90355 8.58348 10.0957 8.58348 12.0575 10.5453C12.2814 10.7691 12.6445 10.7691 12.8683 10.5453C13.0923 10.3213 13.0923 9.9583 12.8683 9.73437C10.4594 7.32548 6.53972 7.32556 4.13083 9.73437Z"
                                fill="#F7921E"
                              />
                              <path
                                d="M8.49981 10.7256C7.41107 10.7256 6.52539 11.6113 6.52539 12.7C6.52539 13.7887 7.41115 14.6744 8.49981 14.6744C9.58855 14.6744 10.4742 13.7887 10.4742 12.7C10.4742 11.6113 9.58847 10.7256 8.49981 10.7256ZM8.49981 13.5277C8.0434 13.5277 7.67215 13.1565 7.67215 12.7001C7.67215 12.2437 8.0434 11.8724 8.49981 11.8724C8.95622 11.8724 9.32747 12.2437 9.32747 12.7001C9.32747 13.1564 8.95615 13.5277 8.49981 13.5277Z"
                                fill="#F7921E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_308_72544">
                                <rect width="17" height="17" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          {item.net} Wi-Fi
                        </li>
                      </ul>
                    </div>
                    <div className="btn-area">
                      <Link href={`${item.destination}`} className="theme-btn">
                        <span>Book Now</span>{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </Link>
                      <h2 className="price-titile">
                        ${item.price} <sub>/ per person</sub>
                      </h2>
                    </div>
                  </div>
                  <div className="hotel-img">
                    <Image src={item.image} alt="img" />
                    <div className="icon">
                      <i className="far fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="top-hotel-box-item">
                  <div className="hotel-img">
                    <Image src={item.image} alt={item.title} />
                    <div className="icon">
                      <i className="far fa-heart"></i>
                    </div>
                  </div>
                  <div className="hotel-content">
                    <span className="location-icon">
                      <i className="far fa-map-marker-alt"></i>
                      {item.location}
                    </span>
                    <h3>
                      <Link href={`${item.destination}`}>{item.title}</Link>
                    </h3>
                    <div className="list-items">
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M15.0668 7.62667V2.89987C15.0668 1.93871 14.2848 1.15674 13.3237 1.15674H3.67628C2.71512 1.15674 1.93322 1.93871 1.93322 2.89987V7.62667C0.825695 7.89309 0 8.89141 0 10.0795V13.6051C0 13.8848 0.226744 14.1116 0.506447 14.1116H1.93319V15.3365C1.93319 15.6162 2.15993 15.8429 2.43963 15.8429C2.71934 15.8429 2.94608 15.6162 2.94608 15.3365V14.1116H14.0539V15.3365C14.0539 15.6162 14.2806 15.8429 14.5603 15.8429C14.84 15.8429 15.0667 15.6162 15.0667 15.3365V14.1116H16.4935C16.7732 14.1116 16.9999 13.8848 16.9999 13.6051V10.0795C17 8.89141 16.1743 7.89309 15.0668 7.62667ZM2.94611 2.89987C2.94611 2.49725 3.2737 2.16967 3.67628 2.16967H13.3237C13.7263 2.16967 14.0539 2.49725 14.0539 2.89987V7.55634H12.3803V6.75734C12.3803 5.43353 11.3033 4.35656 9.9795 4.35656H7.02057C5.69676 4.35656 4.61978 5.43357 4.61978 6.75734V7.55631H2.94611V2.89987ZM11.3674 6.75734V7.55631H5.63261V6.75734C5.63261 5.99204 6.2552 5.36945 7.0205 5.36945H9.97947C10.7447 5.36942 11.3674 5.99208 11.3674 6.75734ZM1.01289 13.0987V10.0795C1.01289 9.24675 1.6904 8.56924 2.52317 8.56924H14.4768C15.3095 8.56924 15.987 9.24675 15.987 10.0795V13.0987H1.01289Z"
                              fill="#F7921E"
                            />
                          </svg>
                          {item.bed} Bedroom
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <mask
                              id="mask0_308_63990"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="17"
                              height="17"
                            >
                              <path
                                d="M0 1.90735e-06H17V17H0V1.90735e-06Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_308_639)">
                              <path
                                d="M10.7929 4.35881C13.1313 5.27511 14.7872 7.55155 14.7872 10.2148C14.7872 13.6871 11.9724 16.502 8.50004 16.502C5.02772 16.502 2.21289 13.6871 2.21289 10.2148C2.21289 7.61055 3.79622 5.37615 6.0528 4.42169"
                                stroke="#F7921E"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.5499 6.44131C11.8863 7.17018 12.795 8.58835 12.795 10.2148C12.795 12.5831 10.8683 14.5098 8.50007 14.5098C6.13182 14.5098 4.20508 12.5831 4.20508 10.2148C4.20508 8.58835 5.11381 7.17018 6.45021 6.44131"
                                stroke="#F7921E"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.39451 7.89307H7.60583C7.05987 7.89307 6.59509 7.49559 6.51046 6.95621L5.90623 1.77864C5.80067 1.10592 6.32074 0.4979 7.00167 0.4979H9.99868C10.6796 0.4979 11.1997 1.10592 11.0941 1.77864L10.4899 6.95621C10.4052 7.49559 9.94047 7.89307 9.39451 7.89307Z"
                                stroke="#F7921E"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                          {item.wash} Wash room
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_308_678)">
                              <mask
                                id="mask0_308_67844"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="18"
                                height="17"
                              >
                                <path
                                  d="M0.000976562 1.90735e-06H17.001V17H0.000976562V1.90735e-06Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_308_678)">
                                <path
                                  d="M7.02973 8.42632L1.00569 13.8819C0.357892 14.4534 0.327013 15.4528 0.937619 16.0634C1.54822 16.6739 2.54764 16.6431 3.11906 15.9953L8.49996 10.0503"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.9543 6.23308L9.96973 8.42578"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.7648 5.04347L8.5 7.09473"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.2429 5.76089C13.413 6.59077 12.0675 6.59077 11.2376 5.76089C10.4078 4.93105 10.4078 3.58556 11.2376 2.75568C12.0675 1.92583 14.4963 0.842479 15.3262 1.67236C16.1561 2.5022 15.0727 4.93105 14.2429 5.76089Z"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.06934 6.26115C9.35689 10.9968 6.67401 8.03373 13.8828 15.9953C14.4542 16.6431 15.4536 16.6739 16.0642 16.0634C16.6748 15.4528 16.6439 14.4533 15.9962 13.8819C15.5019 13.4344 6.69858 5.46374 6.26199 5.06849"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.19467 2.18843L5.85206 2.84582C6.63011 3.62387 6.63011 4.88512 5.85206 5.66317L5.66423 5.85103C4.88614 6.62908 3.62492 6.62908 2.84684 5.85103L2.18945 5.19361L5.19467 2.18843Z"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.19434 2.18848L3.50391 0.498039"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.18946 5.19385L0.499023 3.50344"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.69239 3.69092L2.00195 2.00048"
                                  stroke="#F7921E"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_308_67802">
                                <rect
                                  width="17"
                                  height="17"
                                  fill="white"
                                  transform="translate(0.000976562)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          {item.kitchen} Kitchen
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_308_725)">
                              <path
                                d="M16.8321 5.77088C12.2377 1.17664 4.76226 1.17664 0.167943 5.77088C-0.0559812 5.99488 -0.0559812 6.35787 0.167943 6.58179C0.391868 6.80564 0.754933 6.80564 0.978782 6.58179C5.12594 2.43464 11.874 2.43464 16.0212 6.58179C16.1331 6.69371 16.2799 6.74968 16.4266 6.74968C16.5733 6.74968 16.7201 6.69371 16.832 6.58179C17.0561 6.35787 17.0561 5.99488 16.8321 5.77088Z"
                                fill="#F7921E"
                              />
                              <path
                                d="M2.14939 7.7527C1.92546 7.9767 1.92546 8.33969 2.14939 8.56361C2.26131 8.67553 2.4081 8.7315 2.55481 8.7315C2.70152 8.7315 2.8483 8.67553 2.96023 8.56361C6.01467 5.50902 10.9847 5.50902 14.0393 8.56346C14.2632 8.78731 14.6262 8.78738 14.8501 8.56338C15.074 8.33946 15.074 7.97639 14.8501 7.75247C11.3485 4.25102 5.65092 4.25117 2.14939 7.7527Z"
                                fill="#F7921E"
                              />
                              <path
                                d="M4.13083 9.73437C3.90691 9.95837 3.90691 10.3214 4.13083 10.5452C4.24276 10.6572 4.38954 10.7132 4.53625 10.7132C4.68296 10.7132 4.82975 10.6572 4.94167 10.5453C6.90355 8.58348 10.0957 8.58348 12.0575 10.5453C12.2814 10.7691 12.6445 10.7691 12.8683 10.5453C13.0923 10.3213 13.0923 9.9583 12.8683 9.73437C10.4594 7.32548 6.53972 7.32556 4.13083 9.73437Z"
                                fill="#F7921E"
                              />
                              <path
                                d="M8.49981 10.7256C7.41107 10.7256 6.52539 11.6113 6.52539 12.7C6.52539 13.7887 7.41115 14.6744 8.49981 14.6744C9.58855 14.6744 10.4742 13.7887 10.4742 12.7C10.4742 11.6113 9.58847 10.7256 8.49981 10.7256ZM8.49981 13.5277C8.0434 13.5277 7.67215 13.1565 7.67215 12.7001C7.67215 12.2437 8.0434 11.8724 8.49981 11.8724C8.95622 11.8724 9.32747 12.2437 9.32747 12.7001C9.32747 13.1564 8.95615 13.5277 8.49981 13.5277Z"
                                fill="#F7921E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_308_725786">
                                <rect width="17" height="17" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          {item.net} Wi-Fi
                        </li>
                      </ul>
                    </div>
                    <div className="btn-area">
                      <Link href={`${item.destination}`} className="theme-btn">
                        <span>Book Now</span>{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </Link>
                      <h2 className="price-titile">
                        ${item.price} <sub>/ per person</sub>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaceTwo;
