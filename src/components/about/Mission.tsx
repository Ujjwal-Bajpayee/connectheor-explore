
import { ArrowUpRight, Target } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main geometric shape */}
              <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl transform rotate-3 overflow-hidden shadow-xl">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay transform -rotate-3"></div>
                
                {/* Quote overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8 transform -rotate-3">
                  <blockquote className="text-white text-xl md:text-2xl font-medium text-center italic">
                    "Kindness is Cost-Effective"
                  </blockquote>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-secondary-100 rounded-full z-[-1]"></div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border-4 border-primary-100 rounded-lg z-[-1]"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-primary-600 font-semibold">Our Mission & Vision</span>
              </div>
              
              <h2 className="heading-lg mb-6">
                Advancing Healthcare Through Evidence
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  At ConnectHEOR, we believe that rigorous research and innovative methodologies can transform healthcare decision-making and improve patient outcomes worldwide.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p>
                    To provide high-quality health economics and outcomes research that empowers healthcare stakeholders to make evidence-based decisions that optimize patient care and healthcare resource allocation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p>
                    A healthcare ecosystem where decisions at all levels—from clinical practice to policy-making—are guided by robust evidence, innovative methodologies, and a deep understanding of real-world patient experiences.
                  </p>
                </div>
                
                <div className="group">
                  <a href="/about/philosophy" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    Learn about our research philosophy
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
