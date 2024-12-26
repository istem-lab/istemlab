import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
    return (
      <Card className="w-full bg-gray-900 text-white rounded-none mt-10">
        <CardContent className="py-4 px-6 flex flex-col items-center">
          {/* Left Content */}
          <div className="text-sm mb-2 text-muted-foreground hover:text-white">
            &copy; {new Date().getFullYear()} ISTEM Lab. All rights reserved.
          </div>
          {/* Right Content */}
          <div className="text-sm text-muted-foreground">
            <a href="mailto:info@istem-lab.com" className="hover:text-white">
              info@istem-lab.com
            </a>
          </div>
        </CardContent>
      </Card>
    );
  };  

export { Footer };
