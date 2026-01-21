import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  FolderSync,
  Goal,
} from "lucide-react";

const services = [
  {
    icon: Goal,
    title: "Website Development",
    description: "Custom built websites using the latest technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    icon: BookCheck,
    title: "Website Redesign",
    description: "Transform your outdated site into a modern, high-converting digital experience.",
  },
  {
    icon: FolderSync,
    title: "Maintenance & Hosting",
    description: "Reliable hosting solutions and ongoing maintenance to keep your site secure and fast.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] text-pretty">
            Strengthen Your Digital Strategy
          </h2>
          <p className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Enhance your online presence with intelligent tools designed for success.
          </p>
        </div>
        <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 bg-card/50 hover:bg-card transition-colors duration-300"
            >
              <CardHeader>
                <div className="text-primary">
                  <service.icon className="size-6" />
                </div>
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {service.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted/50 h-40 ml-6 rounded-tl-xl border-t border-l border-border" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
