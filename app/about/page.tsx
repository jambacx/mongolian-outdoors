import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import ChooseSection from "@/components/containers/ChooseSection";
import MarqueeSection from "@/components/containers/MarqueeSection";
import MarqueeSectionTwo from "@/components/containers/MarqueeSectionTwo";
import AboutMain from "@/components/containers/AboutMain";
import Brand from "@/components/containers/Brand";
import TeamSectionTwo from "@/components/containers/TeamSectionTwo";
import CtaTwo from "@/components/containers/CtaTwo";
import NewsSectionTwo from "@/components/containers/NewsSectionTwo";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="About Us" />
      <ChooseSection />
      <MarqueeSection />
      {/* <MarqueeSectionTwo />
      <AboutMain /> */}
      <Brand />
      <TeamSectionTwo />
      {/* <CtaTwo /> */}
      <NewsSectionTwo />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
