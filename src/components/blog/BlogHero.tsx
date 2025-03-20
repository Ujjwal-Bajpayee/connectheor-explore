
import { ArrowRight } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Our Knowledge Hub
          </span>
          <h1 className="heading-xl mt-4 mb-6">
            Insights & Perspectives
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
            Explore our latest research, analysis, and thought leadership on health economics, 
            outcomes research, and healthcare innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
