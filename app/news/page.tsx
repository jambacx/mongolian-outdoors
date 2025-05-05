import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import BlogMain from "@/components/containers/blog/BlogMain";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Latest News" />
      <BlogMain />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
