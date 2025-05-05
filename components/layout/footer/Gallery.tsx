"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import GalleryData from "@/public/data/gallery-data";

const Gallery = () => {
  const [imageDimensions, setImageDimensions] = useState<
    Record<number, { width: number; height: number }>
  >({});

  const handleImageLoad = (id: number, width: number, height: number) => {
    setImageDimensions((prev) => ({
      ...prev,
      [id]: { width, height },
    }));
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".gallery-wrap",
      children: "a",
      mouseMovePan: true,
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="footer-gallery">
      <div className="gallery-wrap">
        <div className="gallery-item">
          {GalleryData.map((item) => (
            <div className="thumb" key={item.id}>
              <Link
                href={item.image.src}
                className="img-popup"
                data-pswp-width={imageDimensions[item.id]?.width || 260}
                data-pswp-height={imageDimensions[item.id]?.height || 260}
                data-pswp-src={item.image.src}
              >
                <Image
                  src={item.image.src}
                  alt={item.alternate}
                  width={imageDimensions[item.id]?.width || 260}
                  height={imageDimensions[item.id]?.height || 260}
                  onLoad={(e) =>
                    handleImageLoad(
                      item.id,
                      (e.target as HTMLImageElement).naturalWidth,
                      (e.target as HTMLImageElement).naturalHeight
                    )
                  }
                />
                <div className="icon">
                  <i className="far fa-plus"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
