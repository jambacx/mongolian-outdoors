"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import NavbarData from "@/public/data/navbar-data";
import logo from "@/public/images/logo/black-logo.svg";

interface OffCanvasMenuProps {
  isOffcanvasOpen: boolean;
  handleOffCanvas: (isOpen: boolean) => void;
}

const OffCanvasMenu = ({
  isOffcanvasOpen,
  handleOffCanvas,
}: OffCanvasMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <div className="fix-area d-block d-xl-none">
        <div
          className={
            (isOffcanvasOpen ? " info-open" : " ") + " offcanvas__info"
          }
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" priority />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => handleOffCanvas(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <h3 className="offcanvas-title">Hello There!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,{" "}
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="offcanvas-menu__list">
                  <div className="navbar__menu">
                    <ul>
                      {NavbarData.map((item, index) => {
                        if (item.megabar) {
                          return (
                            <li className="has-dropdown menu-thumb" key={index}>
                              <a onClick={() => handleDropdownToggle(index)}>
                                {item.title} <i className="fal fa-plus"></i>
                              </a>
                              <ul className="submenu has-homemenu">
                                <li>
                                  <div className="homemenu-items">
                                    <div className="row">
                                      {item.megabar.map((mega, i) => (
                                        <div
                                          className="col-lg-4 homemenu"
                                          key={i}
                                        >
                                          <div className="homemenu-thumb mb-15">
                                            <Link href={mega.path}>
                                              <Image
                                                src={mega.image}
                                                alt="img"
                                              />
                                            </Link>
                                          </div>
                                          <div className="homemenu-content text-center">
                                            <h4 className="homemenu-title">
                                              <Link href={mega.path}>
                                                {mega.title}
                                              </Link>
                                            </h4>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          );
                        } else if (item.submenuMobile) {
                          return (
                            <li
                              className="has-dropdown active d-xl-none"
                              key={index}
                            >
                              <a
                                className="border-none"
                                onClick={() => handleDropdownToggle(index)}
                              >
                                {item.title}
                                <i className="fal fa-plus"></i>
                              </a>
                              <AnimateHeight
                                duration={400}
                                height={openDropdown === index ? "auto" : 0}
                              >
                                <ul className="submenu">
                                  {item.submenuMobile.map((sub, i) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </AnimateHeight>
                            </li>
                          );
                        } else if (item.submenu) {
                          return (
                            <li key={index}>
                              <a onClick={() => handleDropdownToggle(index)}>
                                {item.title}
                                <i className="fal fa-plus"></i>
                              </a>
                              <AnimateHeight
                                duration={400}
                                height={openDropdown === index ? "auto" : 0}
                              >
                                <ul className="submenu">
                                  {item.submenu.map((sub, i) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </AnimateHeight>
                            </li>
                          );
                        } else {
                          return (
                            <li key={index}>
                              <Link href={item.path}>{item.title}</Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="offcanvas__contact">
                <h3>Get Appointment</h3>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-items"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name33"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="email33"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message2"
                          placeholder="Enter message..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="social-icon d-flex align-items-center">
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          (isOffcanvasOpen ? " overlay-open" : " ") +
          " offcanvas__overlay d-block d-xl-none"
        }
        onClick={() => handleOffCanvas(false)}
      ></div>
    </>
  );
};

export default OffCanvasMenu;
