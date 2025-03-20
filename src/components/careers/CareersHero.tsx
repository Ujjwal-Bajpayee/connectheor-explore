
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const CareersHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Join Our Team
          </span>
          <h1 className="heading-xl mt-4 mb-6">
            Make an Impact in Healthcare Research
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance">
            At ConnectHEOR, we're looking for passionate individuals to help shape the future of 
            health economics and outcomes research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#openings">
                View Current Openings <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Recruiting</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
