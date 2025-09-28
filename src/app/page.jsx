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
      <SectionDivider />
      <About />
      <SectionDivider variant="top" />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider variant="top" />
      <Grow />
      <SectionDivider />
      <Blogs />
      <SectionDivider variant="top" />
      <Testimonials />
      <SectionDivider />
      <Faqs />
      <section id="portfolio" className="section section--condensed">
        <div className="container">
          <h2>Portfolio</h2>
          <p>Selected works coming soon.</p>
        </div>
      </section>
      <section id="contact" className="section section--condensed">
        <div className="container">
          <h2>Hire Me</h2>
          <p>Let&apos;s collaborate on your next project.</p>
        </div>
      </section>
    </>
  );
}
