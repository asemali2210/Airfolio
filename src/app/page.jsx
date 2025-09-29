import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Grow from "../components/Grow/Grow";
import Blogs from "../components/Blogs/Blogs";
import Testimonials from "../components/Testimonials/Testimonials";
import Faqs from "../components/Faqs/Faqs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <SectionDivider variant="top" />
      <Experience />
      <SectionDivider />
      <Projects />
      <Grow />
      <Blogs />
      <SectionDivider variant="topBlue" />
      <Testimonials />
      <SectionDivider variant="bottomBlue" />
      <Faqs />
    </>
  );
}
