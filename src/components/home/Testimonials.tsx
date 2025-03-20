
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "ConnectHEOR's approach to health economic modeling transformed our understanding of our new therapy's value proposition. Their insights were instrumental in our successful market access strategy.",
    author: "Dr. Sarah Johnson",
    title: "Chief Medical Officer",
    company: "BioInnovate Therapeutics"
  },
  {
    quote: "The team's expertise in real-world evidence analysis provided us with compelling data that supported our regulatory submissions and strengthened our value story to payers.",
    author: "Michael Chen",
    title: "VP of Market Access",
    company: "PharmaTech Solutions"
  },
  {
    quote: "Working with ConnectHEOR elevated our outcomes research capabilities. Their AI-driven approach identified patterns in our data that we had overlooked, leading to significant improvements in our clinical protocols.",
    author: "Dr. Amelia Rodriguez",
    title: "Director of Clinical Research",
    company: "Global Health Institute"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary-700 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-600 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary-400 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full">
            Client Success Stories
          </span>
          <h2 className="heading-lg mt-4 mb-6 text-white">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Quote className="absolute -top-6 -left-6 h-12 w-12 text-primary-400 opacity-50" />
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20">
              <div className="transition-all duration-500" key={activeIndex}>
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-balance">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <p className="font-semibold text-lg">{testimonials[activeIndex].author}</p>
                    <p className="text-primary-200">{testimonials[activeIndex].title}, {testimonials[activeIndex].company}</p>
                  </div>
                  
                  <div className="flex space-x-3 mt-6 md:mt-0">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={prevTestimonial} 
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={nextTestimonial}
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
