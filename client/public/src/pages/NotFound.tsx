import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center text-destructive mb-6">
        <AlertTriangle className="w-10 h-10" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-4">
        404 Page Not Found
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-md mb-8">
        We couldn't find the page you were looking for. It might have been moved or deleted.
      </p>

      <Link href="/">
        <Button size="lg">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
