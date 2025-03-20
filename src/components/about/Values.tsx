
import { 
  BarChart2, 
  Heart, 
  Lightbulb, 
  LineChart, 
  Users
} from "lucide-react";

const values = [
  {
    icon: <BarChart2 className="h-8 w-8 text-primary-600" />,
    title: "Evidence-Based Excellence",
    description: "We uphold the highest standards of scientific rigor in all our research, ensuring that our findings are robust, reproducible, and reliable."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
    title: "Innovation & Adaptability",
    description: "We embrace cutting-edge methods and technologies, constantly evolving our approaches to address complex healthcare challenges."
  },
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    title: "Collaborative Partnership",
    description: "We work alongside our clients as true partners, understanding their unique needs and co-creating solutions that deliver meaningful impact."
  },
  {
    icon: <Heart className="h-8 w-8 text-primary-600" />,
    title: "Patient-Centered Focus",
    description: "We never lose sight of the ultimate goal: improving outcomes for patients and enhancing their quality of life through better healthcare decisions."
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary-600" />,
    title: "Transparency & Integrity",
    description: "We conduct our research with unwavering ethical standards, ensuring transparency in our methods and honest interpretation of results."
  }
];

const Values = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Our Core Values
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Principles That Guide Our Work
          </h2>
          <p className="text-lg text-gray-600">
            These fundamental values shape our approach to research, collaboration, and innovation in health economics and outcomes research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center animate-delayed-fade"
              data-index={(index % 3) + 1}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
