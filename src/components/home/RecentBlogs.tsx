
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const blogs = [
  {
    title: "The Future of Real-World Evidence in Healthcare Decision Making",
    excerpt: "Exploring how real-world data is transforming clinical research and regulatory approval processes.",
    category: "Research Trends",
    date: "June 15, 2023",
    author: "Dr. Emily Chen",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "/blog/future-of-real-world-evidence"
  },
  {
    title: "AI Applications in Health Economics and Outcomes Research",
    excerpt: "How artificial intelligence is revolutionizing data analysis and insight generation in HEOR.",
    category: "Technology",
    date: "May 28, 2023",
    author: "Mark Williams, PhD",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "/blog/ai-applications-in-heor"
  },
  {
    title: "Patient-Reported Outcomes: Measuring What Matters",
    excerpt: "Why patient perspectives are essential in healthcare evaluation and how to effectively capture them.",
    category: "Methodology",
    date: "April 10, 2023",
    author: "Dr. Sarah Thompson",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    slug: "/blog/patient-reported-outcomes"
  }
];

const RecentBlogs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
              Latest Insights
            </span>
            <h2 className="heading-lg mt-4 mb-2">
              From Our Research Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our latest perspectives on health economics, outcomes research, and healthcare innovation.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0"
            asChild
          >
            <Link to="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card 
              key={index} 
              className="border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 animate-delayed-fade h-full flex flex-col"
              data-index={index + 1}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-sm text-gray-500">
                  {blog.date} • By {blog.author}
                </CardDescription>
                <CardTitle className="text-xl font-semibold line-clamp-2 hover:text-primary-600 transition-colors">
                  <Link to={blog.slug}>{blog.title}</Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary-600 hover:text-primary-700 hover:bg-transparent"
                  asChild
                >
                  <Link to={blog.slug} className="flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
