
import { 
  BarChart3, 
  Brain, 
  FileText, 
  Beaker, 
  Microscope, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-6 w-6 text-primary-600" />,
    title: "AI-Powered Analytics",
    description: "Leverage cutting-edge artificial intelligence to analyze complex healthcare data and extract actionable insights."
  },
  {
    icon: <FileText className="h-6 w-6 text-primary-600" />,
    title: "Evidence Synthesis",
    description: "Comprehensive synthesis of clinical data, literature, and real-world evidence to support healthcare decisions."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary-600" />,
    title: "Economic Modeling",
    description: "Sophisticated health economic models to evaluate the cost-effectiveness of medical interventions and technologies."
  },
  {
    icon: <Users className="h-6 w-6 text-primary-600" />,
    title: "Patient-Centered Outcomes",
    description: "Research focused on understanding and improving outcomes that matter most to patients and their quality of life."
  },
  {
    icon: <Microscope className="h-6 w-6 text-primary-600" />,
    title: "Clinical Trial Analysis",
    description: "Expert analysis of clinical trial data to assess treatment effectiveness and support regulatory submissions."
  },
  {
    icon: <Beaker className="h-6 w-6 text-primary-600" />,
    title: "Market Access Strategy",
    description: "Strategic guidance to optimize value demonstration and market access for healthcare innovations."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Our Capabilities
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Comprehensive Research Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We combine advanced methodologies with deep healthcare expertise to deliver
            insights that drive better decisions and improve patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-delayed-fade"
              data-index={index % 3 + 1}
            >
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
