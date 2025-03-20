
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Flexible Working",
    description: "Remote-first environment with flexible hours to support work-life balance"
  },
  {
    title: "Continuous Learning",
    description: "Budget for conferences, courses, and professional development"
  },
  {
    title: "Comprehensive Benefits",
    description: "Health, dental, vision insurance and competitive retirement plans"
  },
  {
    title: "Collaborative Culture",
    description: "Work alongside industry experts in a supportive environment"
  }
];

const WorkCulture = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-secondary-50 text-secondary-700 text-sm font-medium px-4 py-1.5 rounded-full">
              Our Culture
            </span>
            <h2 className="heading-md mt-4 mb-6">
              A Place to Grow, Learn, and Make a Difference
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're building a diverse team of researchers, analysts, and consultants 
              who are passionate about improving healthcare through rigorous, innovative research.
              Our collaborative environment encourages creativity, continuous learning, and 
              professional growth.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-48">
              <div className="flex items-center justify-center space-x-1">
                <span className="text-4xl font-bold text-primary-600">4.8</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">out of 5</span>
                  <span className="text-xs text-gray-500">Employee Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
