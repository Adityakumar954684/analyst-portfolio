import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto space-y-8">
            {/* 404 Number */}
            <div className="relative">
              <span className="text-[150px] md:text-[200px] font-bold gradient-text leading-none">
                404
              </span>
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10" />
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Page Not Found
              </h1>
              <p className="text-muted-foreground">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
