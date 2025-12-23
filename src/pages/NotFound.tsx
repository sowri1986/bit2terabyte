
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ShieldAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="glass-card p-12 rounded-2xl max-w-md text-center">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <ShieldAlert className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-foreground/80 mb-8">
          This page is secured or doesn't exist
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
