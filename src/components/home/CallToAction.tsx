
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 py-16 px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Ready to Transform Your Healthcare Research?
              </h2>
              <p className="text-white/90 text-lg mb-6 md:mb-0 text-balance">
                Let's collaborate to advance healthcare outcomes with data-driven insights and innovative methodologies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-primary-700 hover:bg-primary-50 text-lg px-6 h-12 font-medium btn-hover-effect"
                asChild
              >
                <Link to="/contact">
                  Schedule a Consultation <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/25 text-white hover:bg-white/10 hover:border-white text-lg px-6 h-12 font-medium"
                asChild
              >
                <Link to="/about">Learn About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
