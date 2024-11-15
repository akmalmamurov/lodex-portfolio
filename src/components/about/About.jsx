import { Container } from "@/container";
import AboutTop from "./AboutTop";
import AboutMid from "./AboutMid";
import AboutBottom from "./AboutBottom";

export const About = () => {
  return (
    <section id="about" className="pt-[190px]">
      <Container>
        <AboutTop />
        <AboutMid />
        <AboutBottom />
      </Container>
    </section>
  );
};

export default About;
