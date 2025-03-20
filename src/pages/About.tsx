
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import CallToAction from "@/components/home/CallToAction";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <CallToAction />
    </Layout>
  );
};

export default About;
