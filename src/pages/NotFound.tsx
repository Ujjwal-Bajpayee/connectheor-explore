
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 max-w-md">
          <div className="mb-6 inline-block">
            <span className="text-9xl font-bold text-gray-200">404</span>
          </div>
          <h1 className="heading-lg mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the page you're looking for. It might have been moved or no longer exists.
          </p>
          <Button 
            className="bg-primary-600 hover:bg-primary-700 text-white"
            asChild
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
