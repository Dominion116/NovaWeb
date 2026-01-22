import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Code2,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "High Performance",
    description: "We build sites that load instantly and perform flawlessly under pressure.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description: "Built with the latest frameworks and standards for future-proof results.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Our team is always available to help you with updates and improvements.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-4 rounded-full px-4 py-1 border border-primary/20 bg-primary/5 text-primary backdrop-blur-md transition-all hover:bg-primary/10">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
            Why NovaWeb?
          </h2>
        </div>
        <p className="mt-4 text-muted-foreground text-lg sm:text-xl text-center max-w-2xl mx-auto">
          We build digital experiences that drive growth and engagement.
        </p>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col border rounded-xl py-6 px-5 bg-card/50 hover:bg-card transition-colors duration-300"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <reason.icon className="size-5 text-primary" />
              </div>
              <span className="text-lg font-semibold">{reason.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
