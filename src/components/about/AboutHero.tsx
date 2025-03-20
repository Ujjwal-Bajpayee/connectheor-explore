
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <div className="max-w-xl">
              <div className="inline-block">
                <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
                  About ConnectHEOR
                </span>
              </div>
              
              <h1 className="heading-xl mt-4 mb-6">
                Transforming Healthcare Through <span className="text-gradient">Evidence & Innovation</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                We're a team of dedicated researchers, economists, and data scientists committed to improving healthcare outcomes through rigorous analysis and innovative methodologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary-600 hover:bg-primary-700 text-white btn-hover-effect"
                  asChild
                >
                  <Link to="/contact">
                    Work With Us <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 hover:border-primary-600 hover:text-primary-700"
                  asChild
                >
                  <Link to="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="ConnectHEOR team" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg border-4 border-primary-100 z-[-1] hidden md:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-4 border-secondary-100 z-[-1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
