"use client"
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <Card className="w-full bg-gray-900 text-white rounded-none mt-10">
        <CardContent className="py-6 px-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Left Content */}
          <div className="text-sm text-muted-foreground text-center">
            &copy; 2024 ISTEM Lab. All rights reserved.
          </div>
          {/* Right Content */}
          <div className="text-sm text-muted-foreground text-center">
            <a
              href="mailto:info@istem-lab.com"
              className="hover:text-white"
              rel="noopener noreferrer"
            >
              info@istem-lab.com
            </a>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};

export { Footer };
