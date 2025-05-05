"use client";
import { useState } from "react";
import YoutubeEmbed from "../layout/YoutubeEmbed";

const Cta = () => {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <div
        className="cta-video-section-2 section-padding bg-cover"
        style={{
          backgroundImage: "url(/images/cta/cta-video.jpg)",
        }}
      >
        <div className="container">
          <a
            className="video-btn ripple video-popup"
            onClick={() => setVideoActive(true)}
          >
            <i className="fas fa-play"></i>
          </a>
        </div>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {videoActive && <YoutubeEmbed embedId="Cn4G2lZ_g2I" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
