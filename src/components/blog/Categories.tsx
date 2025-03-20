
import { Link } from "react-router-dom";

const categories = [
  { name: "HEOR Methodologies", count: 12, slug: "/blog/category/heor-methodologies" },
  { name: "Real-World Evidence", count: 8, slug: "/blog/category/real-world-evidence" },
  { name: "Data Analytics", count: 14, slug: "/blog/category/data-analytics" },
  { name: "AI in Healthcare", count: 9, slug: "/blog/category/ai-healthcare" },
  { name: "Regulatory Insights", count: 6, slug: "/blog/category/regulatory-insights" },
  { name: "Case Studies", count: 11, slug: "/blog/category/case-studies" },
];

const Categories = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="heading-md text-center mb-10">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.slug}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center border border-gray-100"
            >
              <span className="text-lg font-medium text-gray-900 mb-2">{category.name}</span>
              <span className="text-sm text-primary-600">{category.count} Articles</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
