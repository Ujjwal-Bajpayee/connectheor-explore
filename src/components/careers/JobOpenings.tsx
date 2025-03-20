
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Health Economics Researcher",
    location: "Remote (US/Europe)",
    type: "Full-time",
    description: "Lead HEOR studies and develop economic models for healthcare interventions. Apply advanced statistical methods to analyze health outcomes and costs.",
    requirements: ["PhD or Master's in Health Economics or related field", "5+ years of experience in HEOR", "Strong statistical analysis skills", "Experience with economic modeling"],
    slug: "/careers/senior-health-economics-researcher"
  },
  {
    title: "Data Scientist - Real World Evidence",
    location: "Boston, MA (Hybrid)",
    type: "Full-time",
    description: "Apply data science techniques to analyze real-world evidence and generate insights for healthcare decision-making.",
    requirements: ["Master's in Data Science, Statistics, or related field", "3+ years of experience with healthcare data", "Proficiency in R or Python", "Experience with machine learning"],
    slug: "/careers/data-scientist-rwe"
  },
  {
    title: "Medical Writer",
    location: "Remote (Global)",
    type: "Contract",
    description: "Develop high-quality scientific content for research publications, reports, and presentations.",
    requirements: ["Advanced degree in Life Sciences", "2+ years of medical writing experience", "Strong understanding of HEOR concepts", "Excellent writing and editing skills"],
    slug: "/careers/medical-writer"
  },
  {
    title: "Healthcare AI Research Intern",
    location: "Cambridge, MA",
    type: "Internship",
    description: "Support our AI research team in developing and validating machine learning models for healthcare applications.",
    requirements: ["Current Master's or PhD student in Computer Science or related field", "Experience with machine learning frameworks", "Programming skills in Python", "Interest in healthcare applications"],
    slug: "/careers/healthcare-ai-intern"
  }
];

const JobOpenings = () => {
  return (
    <section id="openings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Current Openings
          </span>
          <h2 className="heading-md mt-4 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're looking for talented professionals who are passionate about advancing healthcare research.
            Explore our current opportunities below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-1">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">{job.type}</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to={job.slug}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don't see a position that matches your skills? Submit your details to be considered for future opportunities.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#opportunities-form">Join Our Talent Network</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
