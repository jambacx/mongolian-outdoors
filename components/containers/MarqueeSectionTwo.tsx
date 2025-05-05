import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import MarqueeDataTwo from "@/public/data/marquee-data-two";

const MarqueeSectionTwo = () => {
  return (
    <section className="ft-marquee destination-section-22 fix section-padding pt-0">
      <div className="destination-wrapper-22">
        <div className="destination-auto-slider">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {MarqueeDataTwo.map((item) => {
              const thumbClass =
                item.id % 2 !== 0
                  ? "destination-thumb style-2"
                  : "destination-thumb";
              return (
                <div className="brand-slide-element" key={item.id}>
                  <div className="destination-items">
                    <div className={thumbClass}>
                      <Image src={item.image} alt={item.country} />
                    </div>
                    <div className="destination-content">
                      <h3>
                        <Link href={`${item.destination}`}>{item.country}</Link>
                      </h3>
                      <p>{item.place} + Places</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
      <div className="destination-wrapper-22 style-2">
        <div className="destination-auto-slider-2">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            direction="right"
          >
            {MarqueeDataTwo.map((item) => {
              const thumbClass =
                item.id % 2 !== 0
                  ? "destination-thumb style-2"
                  : "destination-thumb";
              return (
                <div className="brand-slide-element" key={item.id}>
                  <div className="destination-items">
                    <div className={thumbClass}>
                      <Image src={item.image} alt={item.country} />
                    </div>
                    <div className="destination-content">
                      <h3>
                        <Link href={`${item.destination}`}>{item.country}</Link>
                      </h3>
                      <p>{item.place} + Places</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSectionTwo;
