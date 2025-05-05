import Image from "next/image";
import Marquee from "react-fast-marquee";
import MarqueeData from "@/public/data/marquee-data";

const MarqueeSection = () => {
  return (
    <div className="marquee-section fix section-padding pt-0">
      <div className="marque-wrapper style-2">
        <div className="text-slider">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {MarqueeData.slice(0, 7).map((item) => {
              return (
                <div className="brand-slide-element" key={item.id}>
                  <div className="marque-text">
                    <Image src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
      <div className="marque-wrapper style-3">
        <div className="text-slider-2">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            direction="right"
          >
            {MarqueeData.slice(7).map((item) => {
              return (
                <div className="brand-slide-element" key={item.id}>
                  <div className="marque-text">
                    <Image src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
