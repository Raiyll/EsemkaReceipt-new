import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl tracking-widest font-bold text-gray-800 font-yusei">
          404 - Page Not Found
        </h1>
        <Button>
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
