"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VanillaTilt from "vanilla-tilt";

const InitAnimations = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".van-tilt");

    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  return null;
};

export default InitAnimations;
