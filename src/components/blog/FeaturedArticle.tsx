
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturedArticle = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="bg-secondary-50 text-secondary-700 text-sm font-medium px-4 py-1.5 rounded-full">
              Featured Article
            </span>
            <h2 className="heading-md mt-4 mb-4">
              The Impact of AI on Health Economics and Outcomes Research
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Artificial intelligence is dramatically reshaping how we conduct HEOR studies. 
              Our latest research examines the opportunities, challenges, and ethical considerations
              of implementing AI-driven methodologies in healthcare evaluation.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" 
                alt="Author" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <span className="block text-gray-900 font-medium">Dr. Michael Thompson</span>
                <span>June 12, 2023 • 12 min read</span>
              </div>
            </div>
            <Button asChild>
              <Link to="/blog/impact-of-ai-on-heor">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI in Healthcare" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
