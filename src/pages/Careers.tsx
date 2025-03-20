
import Layout from "@/components/layout/Layout";
import CareersHero from "@/components/careers/CareersHero";
import JobOpenings from "@/components/careers/JobOpenings";
import WorkCulture from "@/components/careers/WorkCulture";
import OpportunitiesForm from "@/components/careers/OpportunitiesForm";
import CallToAction from "@/components/home/CallToAction";

const Careers = () => {
  return (
    <Layout>
      <CareersHero />
      <WorkCulture />
      <JobOpenings />
      <OpportunitiesForm />
      <CallToAction />
    </Layout>
  );
};

export default Careers;
