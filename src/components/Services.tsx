import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Globe, Server } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Custom built websites using the latest technologies like React, Next.js, and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Website Redesign",
    description: "Transform your outdated site into a modern, high-converting digital experience.",
    icon: Globe,
  },
  {
    title: "Maintenance & Hosting",
    description: "Reliable hosting solutions and ongoing maintenance to keep your site secure and fast.",
    icon: Server,
  },
];

export function Services() {
  return (
    <section className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive web solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-card hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
