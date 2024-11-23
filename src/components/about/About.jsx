import AboutTop from "./AboutTop";
import AboutMid from "./AboutMid";
import AboutBottom from "./AboutBottom";

export const About = () => {
  return (
    <section id="about" className="pt-[190px]">
        <AboutTop />
        <AboutMid />
        <AboutBottom />
    </section>
  );
};

export default About;
