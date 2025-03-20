
import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Data Collection & Analysis",
    description: "We gather and analyze comprehensive healthcare data from multiple sources, including clinical trials, patient registries, and real-world databases.",
    points: [
      "Multi-source data integration",
      "Advanced statistical analysis",
      "Pattern recognition & insights extraction"
    ]
  },
  {
    number: "02",
    title: "Evidence Synthesis & Modeling",
    description: "Our experts synthesize the evidence and develop sophisticated economic models tailored to your specific research questions and objectives.",
    points: [
      "Systematic literature reviews",
      "Meta-analyses & network comparisons",
      "Cost-effectiveness modeling"
    ]
  },
  {
    number: "03",
    title: "Strategic Implementation",
    description: "We translate insights into actionable strategies, supporting decision-making across product lifecycle, pricing, and market access planning.",
    points: [
      "Value demonstration strategies",
      "Stakeholder engagement planning",
      "Implementation roadmaps"
    ]
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Our Approach
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Research Process That Delivers Results
          </h2>
          <p className="text-lg text-gray-600">
            Our methodical approach ensures rigorous analysis and actionable insights
            that drive informed healthcare decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 animate-delayed-fade"
              data-index={index + 1}
            >
              <div className="absolute -top-4 left-8 bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-5">{step.description}</p>
              
              <ul className="space-y-2">
                {step.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
