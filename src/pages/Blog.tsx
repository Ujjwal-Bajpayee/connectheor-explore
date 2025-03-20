
import Layout from "@/components/layout/Layout";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import Categories from "@/components/blog/Categories";
import Newsletter from "@/components/blog/Newsletter";
import CallToAction from "@/components/home/CallToAction";

const Blog = () => {
  return (
    <Layout>
      <BlogHero />
      <FeaturedArticle />
      <Categories />
      <BlogList />
      <Newsletter />
      <CallToAction />
    </Layout>
  );
};

export default Blog;
