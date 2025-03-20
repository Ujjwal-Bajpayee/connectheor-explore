
import { LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Emily Richardson",
    role: "Founder & Chief Scientific Officer",
    bio: "PhD in Health Economics with 15+ years of experience in outcomes research and healthcare policy evaluation.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Michael Oladipo",
    role: "Director of Research",
    bio: "Specializes in real-world evidence generation and health technology assessment with background in clinical medicine.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Head of Data Science",
    bio: "Expert in machine learning applications in healthcare with focus on predictive modeling and pattern recognition in clinical data.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. James Foster",
    role: "Director of Health Economics",
    bio: "Specializes in economic evaluations and cost-effectiveness analysis across various therapeutic areas.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Our Leadership
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Meet the Experts Behind ConnectHEOR
          </h2>
          <p className="text-lg text-gray-600">
            Our team combines deep expertise in health economics, outcomes research, data science, and clinical medicine to deliver insights that transform healthcare decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 animate-delayed-fade"
              data-index={(index % 4) + 1}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full w-9 h-9"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-full w-9 h-9"
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-gray-300 hover:border-primary-600 hover:text-primary-700"
            asChild
          >
            <a href="/about/team">View Full Team</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
