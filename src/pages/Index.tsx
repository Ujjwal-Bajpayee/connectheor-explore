
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import RecentBlogs from "@/components/home/RecentBlogs";
import CallToAction from "@/components/home/CallToAction";
import Philosophy from "@/components/about/Philosophy";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Philosophy />
      <Process />
      <Testimonials />
      <RecentBlogs />
      <CallToAction />
    </Layout>
  );
};

export default Index;
